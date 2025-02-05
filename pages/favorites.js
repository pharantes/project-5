import ArtsList from "./components/ArtsList";
export default function HomePage({ toggleFavorite, favorites, addComment }) {
  console.log(favorites);
  return (
    <div>
      <h1>Art Gallery</h1>
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
