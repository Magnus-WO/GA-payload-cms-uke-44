import { type CollectionConfig, slugField } from "payload";

export const Authors: CollectionConfig = {
  slug: "authors",
  fields: [
    {
      label: "Fornavn",
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      label: "Etternavn",
      name: "lastName",
      type: "text",
      required: true,
    },
    slugField(),
  ],
};
