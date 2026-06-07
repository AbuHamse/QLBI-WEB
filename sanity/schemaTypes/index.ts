import { type SchemaTypeDefinition } from 'sanity'
import { assetType } from './assetType'

export const schemaTypes = [assetType]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [assetType], // Fixed the typo here from assetTy to assetType
}