import ArtDetail from "./components/ArtDetail";

export default function Spotlight({ data, toggleFavorite, addComment }) {
  const random = Math.floor(Math.random() * data.length);
  return (
    <>
      <h1>Art Gallery</h1>
      <h2>Spotlight</h2>
      <ArtDetail
        toggleFavorite={toggleFavorite}
        art={data[random]}
        addComment={addComment}
      />
    </>
  );
}
