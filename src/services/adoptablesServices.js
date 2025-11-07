import {
  client,
  adoptablesQuery,
  adoptableBySlugQuery,
  allAdoptablesQuery,
  urlFor,
} from "../lib/sanityClient";

/**
 * Get all available adoptables from Sanity
 * @returns {Promise<Array>} Array of adoptable pets
 */
export async function getAllAdoptables() {
  try {
    console.log("🔍 Fetching adoptables from Sanity...");
    const adoptables = await client.fetch(adoptablesQuery);
    console.log(
      "📦 Raw adoptables received:",
      adoptables?.length || 0,
      "items"
    );

    if (!adoptables || adoptables.length === 0) {
      console.warn("⚠️ No adoptables found. Checking all adoptables...");
      // Fallback: try fetching all to see if it's a status filter issue
      const allAdoptables = await client.fetch(allAdoptablesQuery);
      console.log(
        "📦 All adoptables (any status):",
        allAdoptables?.length || 0,
        "items"
      );
      if (allAdoptables && allAdoptables.length > 0) {
        console.log(
          "💡 Found adoptables but they may not have 'available' status"
        );
      }
    }

    const transformed =
      adoptables?.map(transformAdoptable).filter(Boolean) || [];
    console.log("✅ Transformed adoptables:", transformed.length);
    if (transformed.length > 0) {
      console.log("📋 First adoptable sample:", transformed[0]);
    }
    return transformed;
  } catch (error) {
    console.error("❌ Error fetching adoptables:", error);
    console.error("Error details:", error.message, error.stack);
    return [];
  }
}

/**
 * Get all adoptables (including adopted) from Sanity
 * @returns {Promise<Array>} Array of all adoptable pets
 */
export async function getAllAdoptablesIncludingAdopted() {
  try {
    console.log("🔍 Fetching all adoptables (including adopted)...");
    const adoptables = await client.fetch(allAdoptablesQuery);
    console.log(
      "📦 All adoptables received:",
      adoptables?.length || 0,
      "items"
    );
    const transformed =
      adoptables?.map(transformAdoptable).filter(Boolean) || [];
    console.log("✅ Transformed adoptables:", transformed.length);
    return transformed;
  } catch (error) {
    console.error("❌ Error fetching all adoptables:", error);
    return [];
  }
}

/**
 * Get a single adoptable by slug
 * @param {string} slug - The slug of the adoptable
 * @returns {Promise<Object|null>} The adoptable pet or null
 */
export async function getAdoptableBySlug(slug) {
  try {
    console.log("🔍 Fetching adoptable by slug:", slug);
    const adoptable = await client.fetch(adoptableBySlugQuery, { slug });
    if (!adoptable) {
      console.warn("⚠️ No adoptable found with slug:", slug);
      return null;
    }
    const transformed = transformAdoptable(adoptable);
    console.log("✅ Found adoptable:", transformed?.name);
    return transformed;
  } catch (error) {
    console.error("❌ Error fetching adoptable by slug:", error);
    return null;
  }
}

/**
 * Get a single adoptable by ID (for backward compatibility)
 * @param {string} id - The ID or slug of the adoptable
 * @returns {Promise<Object|null>} The adoptable pet or null
 */
export async function getAdoptableById(id) {
  // Try slug first, then fall back to _id
  const bySlug = await getAdoptableBySlug(id);
  if (bySlug) return bySlug;

  try {
    const query = `*[_type == "adoptable" && _id == $id][0] {
      _id,
      name,
      "slug": slug.current,
      breed,
      age,
      weight,
      gender,
      bio,
      details,
      adoptionStatus,
      featured,
      order,
      photos[] {
        asset-> {
          _id,
          _ref,
          _type,
          url
        },
        alt
      }
    }`;
    console.log("🔍 Fetching adoptable by ID:", id);
    const adoptable = await client.fetch(query, { id });
    if (!adoptable) {
      console.warn("⚠️ No adoptable found with ID:", id);
      return null;
    }
    const transformed = transformAdoptable(adoptable);
    console.log("✅ Found adoptable:", transformed?.name);
    return transformed;
  } catch (error) {
    console.error("❌ Error fetching adoptable by ID:", error);
    return null;
  }
}

/**
 * Transform Sanity adoptable data to match existing component expectations
 * @param {Object} adoptable - Raw adoptable data from Sanity
 * @returns {Object} Transformed adoptable data
 */
function transformAdoptable(adoptable) {
  if (!adoptable) {
    console.warn("⚠️ transformAdoptable received null/undefined adoptable");
    return null;
  }

  try {
    // Get the first photo as the main image
    const mainPhoto =
      adoptable.photos && adoptable.photos.length > 0
        ? adoptable.photos[0]
        : null;

    // Transform photos array to URLs
    const photos = (adoptable.photos || [])
      .map((photo, index) => {
        try {
          // Handle different photo formats from Sanity
          if (photo?.asset) {
            // If asset has direct reference, use urlFor
            if (photo.asset._id || photo.asset._ref) {
              return urlFor(photo.asset).width(1200).url();
            }
            // If asset has URL directly, use it
            if (photo.asset.url) {
              return photo.asset.url;
            }
          }
          // If photo itself is a reference
          if (photo._type === "image" && photo.asset) {
            return urlFor(photo.asset).width(1200).url();
          }
          return null;
        } catch (err) {
          console.warn(
            `⚠️ Error transforming photo ${index} for ${adoptable.name}:`,
            err
          );
          return null;
        }
      })
      .filter(Boolean);

    // Get main image URL
    let image = null;
    if (mainPhoto?.asset) {
      try {
        if (mainPhoto.asset._id || mainPhoto.asset._ref) {
          image = urlFor(mainPhoto.asset).width(800).url();
        } else if (mainPhoto.asset.url) {
          image = mainPhoto.asset.url;
        }
      } catch (err) {
        console.warn(
          `⚠️ Error creating main image URL for ${adoptable.name}:`,
          err
        );
      }
    }

    // Handle slug - it might already be a string or an object
    const slugValue =
      typeof adoptable.slug === "string"
        ? adoptable.slug
        : adoptable.slug?.current;

    const result = {
      id: slugValue || adoptable._id,
      _id: adoptable._id,
      name: adoptable.name || "Unnamed Pet",
      slug: slugValue,
      breed: adoptable.breed || "",
      age: adoptable.age || "",
      weight: adoptable.weight || "",
      gender: adoptable.gender || "",
      description: adoptable.bio || "",
      details: adoptable.details || "",
      adoptionStatus: adoptable.adoptionStatus || "available",
      featured: adoptable.featured || false,
      image: image || "",
      images: photos.length > 0 ? photos : image ? [image] : [],
      order: adoptable.order ?? 0,
    };

    return result;
  } catch (error) {
    console.error(`❌ Error transforming adoptable ${adoptable._id}:`, error);
    // Return a minimal valid object even if transform fails
    return {
      id: adoptable._id,
      _id: adoptable._id,
      name: adoptable.name || "Unnamed Pet",
      slug:
        typeof adoptable.slug === "string"
          ? adoptable.slug
          : adoptable.slug?.current,
      description: adoptable.bio || "",
      details: adoptable.details || "",
      adoptionStatus: adoptable.adoptionStatus || "available",
      image: "",
      images: [],
      order: adoptable.order ?? 0,
    };
  }
}
