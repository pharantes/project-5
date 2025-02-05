import ArtDetail from "./components/ArtDetail";
import { useArtContext } from "../utils/use-art-context"

export default function Spotlight() {
  const { arts, toggleFavorite, addComment, isLoading, error } = useArtContext()
  const random = Math.floor(Math.random() * arts?.length);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (!isLoading) {
    return (
      <>
        <h1>Art Gallery</h1>
        <h2>Spotlight</h2>
        <ArtDetail
          toggleFavorite={toggleFavorite}
          art={arts?.[random]}
          addComment={addComment}
        />
      </>
    );
  }
}