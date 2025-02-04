import ArtsList from "./components/ArtsList";
export default function HomePage({ data, setFavorite }) {
  return (
    <div>
      <h1>Art Gallery</h1>

      <ArtsList
        data={data}
        setFavorite={setFavorite}
      />

    </div>
  );
}
