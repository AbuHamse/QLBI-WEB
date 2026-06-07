import {defineField, defineType} from 'sanity'

export const assetType = defineType({
  name: 'mediaAsset',
  title: 'Media Asset Manager',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Asset Identifier / Name',
      type: 'string',
      description: 'The exact name of the file (e.g., img18, img19, qlbi-vid)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug Key',
      type: 'slug',
      options: {source: 'title'},
      description: 'Used to easily fetch this specific asset via API query',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'assetType',
      title: 'Media Category',
      type: 'string',
      options: {
        list: [
          {title: 'Image Element', value: 'image'},
          {title: 'Background Video Loop', value: 'video'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageFile',
      title: 'Upload Image Source',
      type: 'image',
      options: {
        hotspot: true, // Allows you to crop and set focal points inside the CMS dashboard dynamically
      },
      hidden: ({document}) => document?.assetType !== 'image',
    }),
    defineField({
      name: 'videoFile',
      title: 'Upload Video Source (MP4)',
      type: 'file',
      options: {
        accept: 'video/mp4', // Restricts uploads strictly to your required mp4 format
      },
      hidden: ({document}) => document?.assetType !== 'video',
    }),
  ],
})