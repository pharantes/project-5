import ArtsList from "./components/ArtsList";
import { useArtContext } from "../utils/use-art-context"

export default function Spotlight() {
  const { arts, toggleFavorite, addComment, isLoading, error } = useArtContext()
  const random = Math.floor(Math.random() * arts?.length);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (!isLoading) {
    return (
      <>
        <h2>Spotlight</h2>
        <ArtsList
          toggleFavorite={toggleFavorite}
          data={[arts?.[random]]}
        />
      </>
    );
  }
}