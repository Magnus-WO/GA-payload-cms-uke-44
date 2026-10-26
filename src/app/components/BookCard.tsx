import { Book } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

export type BookCardProps = {
  book: Book;
  as: "h2" | "h3" | "h4" | "h5";
};

export default function BookCard({ book, as }: BookCardProps) {
  const Element = as;
  return (
    <article className="BookCard">
      <Element>{book.title}</Element>
      <p>Pris: {book.price},-</p>
      <Link href={`/books/${book.slug}`} className="Button">
        Les mer
      </Link>
    </article>
  );
}
