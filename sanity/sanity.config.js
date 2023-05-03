import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'deliveroo-clone',

  projectId: 'vbh5bu05',
  dataset: 'deliveroo-clone',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
