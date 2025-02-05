import React from "react";
import Link from "next/link";
import { useRouter } from "next/router.js";
import ArtDetail from "./components/ArtDetail";

export default function DetailPage({ data, toggleFavorite, addComment }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady) {
    return null;
  }

  const artIndex = data.findIndex((art) => art.slug === slug);

  const art = data[artIndex];
  const nextArt = data[artIndex + 1];
  const previousArt = data[artIndex - 1];

  return (
    <>
      <h2>
        <Link href={`/`}>← Art Gallery</Link>
      </h2>
      <ArtDetail
        art={art}
        addComment={addComment}
        toggleFavorite={toggleFavorite}
      />
      {previousArt ? (
        <div>
          <Link href={`/${previousArt.slug}`}>
            ← Previous Art: {previousArt.name}
          </Link>
        </div>
      ) : null}
      {nextArt ? (
        <div>
          <Link href={`/${nextArt.slug}`}>Next Art: {nextArt.name} →</Link>
        </div>
      ) : null}
    </>
  );
}
