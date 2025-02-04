import ArtsList from "./components/ArtsList";
export default function HomePage({ data, setFavorite }) {
    const favorites = data.filter(art => art.favorite === true)

    console.log(favorites)
    return (
        <div>
            <h1>Art Gallery</h1>
            <h2>Favorites</h2>
            {favorites.length ? <ArtsList
                data={favorites}
                setFavorite={setFavorite}
            /> :
                <h3>No Favorites So Far</h3>
            }
        </div>
    );
}
