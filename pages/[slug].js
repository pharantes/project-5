import React from "react";
import Link from "next/link";
import { useRouter } from "next/router.js";
import ArtDetail from "./components/ArtDetail";
import Pagination from "./components/Pagination";
import { useArtContext } from "../utils/use-art-context"

export default function DetailPage() {
  const { arts, toggleFavorite, addComment, isLoading, error } = useArtContext()
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady) {
    return null;
  }

  const artIndex = arts.findIndex((art) => art.slug === slug);
  const art = arts[artIndex];
  const nextArt = arts[artIndex + 1];
  const previousArt = arts[artIndex - 1];
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (!isLoading) {
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
        <Pagination prevArt={previousArt} nextArt={nextArt} />

      </>
    );
  }
}
