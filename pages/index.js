import ArtsList from "./components/ArtsList";
export default function HomePage({ data, toggleFavorite, addComment }) {
  return (
    <div>
      <h1>Art Gallery</h1>

      <ArtsList
        data={data}
        toggleFavorite={toggleFavorite}
        addComment={addComment}
      />
    </div>
  );
}
