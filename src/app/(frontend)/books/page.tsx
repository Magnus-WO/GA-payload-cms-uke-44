import { getPayload } from "payload";
import config from "@/payload.config";
import { notFound } from "next/navigation";

import BookCard from "@/app/components/BookCard";
import { Book } from "@/payload-types";

export default async function BooksPage() {
  const payload = await getPayload({ config });
  const result = await payload.find({ collection: "books" });
  const books = result.docs;

  return (
    <>
      <h1>Dette er en side for bøkene</h1>
      <section className="booksDisplay grid__3">
        {books.map((book: Book) => (
          <BookCard book={book} as="h2" key={book.id} />
        ))}
      </section>
    </>
  );
}
