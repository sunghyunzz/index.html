import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Essay = defineDocumentType(() => ({
  name: 'Essay',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (essay) => `/${essay._raw.flattenedPath}`,
    },
    coverImageUrl: {
      type: 'string',
      resolve: (essay) => `/covers/${essay._raw.flattenedPath}.png`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'blog',
  documentTypes: [Essay],
});