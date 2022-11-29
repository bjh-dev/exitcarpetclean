import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import structure from './structure'
import {schemaTypes} from './schemas'
import './styles.css'

export default createConfig({
  name: 'default',
  title: 'exitcarpetclean',

  projectId: 'pbpr3jz5',
  dataset: 'production',

  plugins: [deskTool({structure})],

  schema: {
    types: schemaTypes,
  },
})
