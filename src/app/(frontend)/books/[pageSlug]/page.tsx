import { getPayload } from "payload";
import config from "@/payload.config";

import { notFound } from "next/navigation";

export type PageProps = {
  params: Promise<{
    pageSlug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { pageSlug } = await params;
  const payload = await getPayload({ config });
  const queryResult = await payload.find({
    collection: "books",
    where: { slug: { equals: pageSlug } },
  });

  if (!queryResult || queryResult.docs.length === 0) {
    notFound();
  }
  const [page] = queryResult.docs;

  return (
    <>
      <h1>{page.title}</h1>
      <br />
      <p>{page.summary}</p>
      <br />
      <p>{page.price},-</p>
    </>
  );
}
