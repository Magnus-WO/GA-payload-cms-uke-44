import { slugField, type CollectionConfig } from "payload";

export const Books: CollectionConfig = {
  slug: "books",
  access: { read: () => true },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "summary",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    slugField(),
  ],
};
