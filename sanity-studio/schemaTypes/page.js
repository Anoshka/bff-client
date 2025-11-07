import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: () => '📄',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
      hidden: true, // Hide from user - auto-generated
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'textBlock',
          title: 'Text Block',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'text',
            },
            prepare({title}) {
              return {
                title: title ? title.substring(0, 50) + '...' : 'Text Block',
              }
            },
          },
        },
        {
          type: 'image',
          name: 'imageBlock',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
        {
          type: 'object',
          name: 'formBlock',
          title: 'Contact Form',
          fields: [
            {
              name: 'formTitle',
              title: 'Form Title',
              type: 'string',
              description: 'Title shown above the form',
              initialValue: 'Send Message',
            },
            {
              name: 'fields',
              title: 'Form Fields',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'formField',
                  title: 'Form Field',
                  fields: [
                    {
                      name: 'name',
                      title: 'Field Name (ID)',
                      type: 'string',
                      description: "Internal field name (e.g., 'name', 'email')",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'label',
                      title: 'Field Label',
                      type: 'string',
                      description: 'Label shown to users',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'type',
                      title: 'Field Type',
                      type: 'string',
                      options: {
                        list: [
                          {title: 'Text', value: 'text'},
                          {title: 'Email', value: 'email'},
                          {title: 'Phone', value: 'tel'},
                          {title: 'Textarea', value: 'textarea'},
                          {title: 'Number', value: 'number'},
                        ],
                      },
                      initialValue: 'text',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'placeholder',
                      title: 'Placeholder Text',
                      type: 'string',
                    },
                    {
                      name: 'required',
                      title: 'Required',
                      type: 'boolean',
                      initialValue: false,
                    },
                    {
                      name: 'rows',
                      title: 'Rows (for textarea)',
                      type: 'number',
                      description: 'Number of rows for textarea fields',
                      initialValue: 5,
                      hidden: ({parent}) => parent?.type !== 'textarea',
                    },
                  ],
                  preview: {
                    select: {
                      label: 'label',
                      type: 'type',
                      required: 'required',
                    },
                    prepare({label, type, required}) {
                      return {
                        title: label || 'Unnamed Field',
                        subtitle: `${type}${required ? ' (required)' : ''}`,
                      }
                    },
                  },
                },
              ],
            },
            {
              name: 'submitButtonText',
              title: 'Submit Button Text',
              type: 'string',
              initialValue: 'Send',
            },
            {
              name: 'successMessage',
              title: 'Success Message',
              type: 'text',
              description: 'Message shown after successful submission',
              initialValue: 'Thank you! Your message has been sent.',
            },
          ],
          preview: {
            select: {
              title: 'formTitle',
            },
            prepare({title}) {
              return {
                title: title || 'Contact Form',
                subtitle: 'Form Block',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'showInHeader',
      title: 'Show in Header Navigation',
      type: 'boolean',
      description: 'Add this page to the main navigation menu',
      initialValue: false,
    }),
    defineField({
      name: 'headerOrder',
      title: 'Header Order',
      type: 'number',
      description: 'Order in header menu (lower numbers appear first)',
      initialValue: 100,
      hidden: ({document}) => !document?.showInHeader,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Meta Description',
          type: 'text',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({title, slug}) {
      return {
        title,
        subtitle: slug ? `/${slug}` : 'No slug',
      }
    },
  },
})
