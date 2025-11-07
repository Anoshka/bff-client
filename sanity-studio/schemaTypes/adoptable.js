import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'adoptable',
  title: 'Adoptable Pet',
  type: 'document',
  icon: () => '🐕',

  // Enable draft/publish workflow
  //   __experimental_actions: [
  //     // 'create',
  //     "update",
  //     // 'publish',
  //     "delete",
  //     // 'publish', // Uncomment to allow direct publish
  //   ],

  fields: [
    defineField({
      name: 'name',
      title: 'Pet Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
      hidden: true, // Hide from user - auto-generated
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'breed',
      title: 'Breed',
      type: 'string',
      description: 'e.g., "Terrier X Basset Hound" (Optional)',
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'string',
      description: 'e.g., "3 Years", "11 months" (Optional)',
    }),
    defineField({
      name: 'weight',
      title: 'Weight',
      type: 'string',
      description: 'e.g., "40 lbs" (Optional)',
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          {title: 'Male', value: 'Male'},
          {title: 'Female', value: 'Female'},
        ],
      },
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      description: 'Short description shown on cards',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'details',
      title: 'Full Details',
      type: 'text',
      description: 'Full description shown on profile page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'adoptionStatus',
      title: 'Adoption Status',
      type: 'string',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Adopted', value: 'adopted'},
          {title: 'Pending', value: 'pending'},
        ],
        layout: 'radio',
      },
      initialValue: 'available',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // Enable image cropping
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for accessibility',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: (Rule) => Rule.min(1).error('At least one photo is required'),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this pet on the homepage',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
  ],

  // Custom preview in the desk
  preview: {
    select: {
      title: 'name',
      subtitle: 'adoptionStatus',
      media: 'photos.0',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle ? `Status: ${subtitle}` : 'No status',
        media,
      }
    },
  },

  // Order by display order, then creation date
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Newest First',
      name: 'createdDesc',
      by: [{field: '_createdAt', direction: 'desc'}],
    },
  ],
})
