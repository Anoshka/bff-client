import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Initialize Sanity client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "9p9lqoeb",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export function urlFor(source) {
  return builder.image(source);
}

// GROQ queries
export const adoptablesQuery = `*[_type == "adoptable" && adoptionStatus == "available"] | order(order asc, _createdAt desc) {
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

export const adoptableBySlugQuery = `*[_type == "adoptable" && slug.current == $slug][0] {
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

export const allAdoptablesQuery = `*[_type == "adoptable"] | order(order asc, _createdAt desc) {
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

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  content,
  seo,
  showInHeader,
  headerOrder
}`;

export const allPagesQuery = `*[_type == "page"] | order(headerOrder asc, title asc) {
  _id,
  title,
  "slug": slug.current,
  showInHeader,
  headerOrder
}`;

export const headerPagesQuery = `*[_type == "page" && showInHeader == true] | order(headerOrder asc, title asc) {
  _id,
  title,
  "slug": slug.current,
  headerOrder
}`;

export const settingsQuery = `*[_type == "settings"][0] {
  siteName,
  logo,
  heroBanner,
  heroTitle,
  heroSubtitle,
  primaryColor,
  secondaryColor,
  contactEmail,
  contactPhone,
  socialLinks
}`;
