import ArtDetail from "./components/ArtDetail";

export default function Spotlight({ data, setFavorite }) {

    const random = Math.floor(Math.random() * data.length);
    return (
        <>
            <h1>Art Gallery</h1>
            <h2>Spotlight</h2>
            <ArtDetail setFavorite={setFavorite} art={data[random]} />
        </>
    )
}
