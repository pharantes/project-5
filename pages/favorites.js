import ArtsList from "./components/ArtsList";
import { useArtContext } from "../utils/use-art-context"


export default function HomePage() {
  const { favorites, toggleFavorite, addComment, isLoading, error } = useArtContext()
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (!isLoading) {
    return (
      <div>
        <h2>Favorites</h2>
        {favorites.length ? (
          <ArtsList
            addComment={addComment}
            data={favorites}
            toggleFavorite={toggleFavorite}
          />
        ) : (
          <h3>No Favorites So Far</h3>
        )}
      </div>
    );
  }
}