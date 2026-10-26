import React from "react";
import Link from "next/link";
import "@/CSS/index.css";

export const metadata = {
  description: "Et starterprosjekt for Payload CMS, bygget med Docker",
  title: "Payload CMS",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="no">
      <body>
        <main className="container large">
          <nav className="Navbar">
            <Link href={`/`}>Hjem</Link>
            <Link href={`/books`}>Bøker</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
