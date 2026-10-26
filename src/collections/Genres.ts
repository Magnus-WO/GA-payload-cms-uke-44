import { slugField, type CollectionConfig } from "payload";

export const Genres: CollectionConfig = {
  slug: "genres",
  admin: {
    useAsTitle: "title", //hvilket av disse feltene skal brukes i visning?
  },

  fields: [
    {
      label: "Sjanger",
      name: "title",
      type: "text",
      required: true,
    },
    slugField(),
  ],
};
