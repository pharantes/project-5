import { useArtContext } from "../utils/use-art-context";
import ArtsList from "./components/ArtsList";

export default function HomePage() {

  const { arts, toggleFavorite, addComment, isLoading, error } = useArtContext()
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (!isLoading) {
    return (
      <div>
        <h2>Home</h2>

        <ArtsList
          data={arts}
          toggleFavorite={toggleFavorite}
          addComment={addComment}
        />
      </div>
    );
  }
}
