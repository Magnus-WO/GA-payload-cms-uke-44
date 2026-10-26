import { slugField, type CollectionConfig } from "payload";

export const Books: CollectionConfig = {
  slug: "books",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Tittel",
      required: true,
    },
    {
      label: "Oppsummering",
      name: "summary",
      type: "text",
      required: true,
    },
    {
      label: "Pris",
      name: "price",
      type: "number",
      min: 0,
      required: true,
    },
    slugField(),
    {
      name: "author",
      label: "Forfatter",
      type: "relationship",
      relationTo: "authors",
      hasMany: false,
      required: false,
    },
    {
      name: "genres",
      label: "Sjanger",
      type: "relationship", //åpner opp for en relasjon
      relationTo: "genres", // spesifiserer hvilken collection den er relatert til
      hasMany: true, // sier at hver bok kan ha flere
      required: false, // sier at det ikke er påkrevd
    },
  ],
};
