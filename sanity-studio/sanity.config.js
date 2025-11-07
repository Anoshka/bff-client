import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'BFF Pet Adoption CMS',

  projectId: '9p9lqoeb',
  dataset: 'production',

  basePath: '/studio', // Access studio at /studio

  plugins: [
    structureTool({
      // Customize desk structure
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Adoptables')
              .child(
                S.documentTypeList('adoptable')
                  .title('Adoptables')
                  .defaultOrdering([{field: 'order', direction: 'asc'}]),
              ),
            S.listItem()
              .title('Pages')
              .child(
                S.documentTypeList('page')
                  .title('Pages')
                  .defaultOrdering([{field: 'title', direction: 'asc'}]),
              ),
            S.listItem()
              .title('Settings')
              .child(S.document().schemaType('settings').documentId('settings')),
            // Add a divider
            S.divider(),
            // Show all other document types (if any)
            ...S.documentTypeListItems().filter(
              (listItem) => !['adoptable', 'page', 'settings'].includes(listItem.getId()),
            ),
          ]),
    }),
    visionTool(), // GROQ query tool
  ],

  schema: {
    types: schemaTypes,
  },
})
