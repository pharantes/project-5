import GlobalStyle from "../styles";
import Nav from "./components/NavBar";
import useLocalStorage from "use-local-storage-state";
import useSWR from "swr";

export default function App({ Component, pageProps }) {

  const URL = "https://example-apis.vercel.app/api/art";
  async function fetcher() {
    const response = await fetch(URL);
    return await response.json();
  }
  const { data, isLoading, error } = useSWR(URL, fetcher);
  const initialState = data?.map((art) => {
    return { ...art, comments: [], favorite: false };
  });
  const [favorites, setFavorites] = useLocalStorage("favorites", {
    defaultValue: [],
  });
  const [arts, setArts] = useLocalStorage("arts", {
    defaultValue: initialState,
  });
  function toggleFavorite(name) {
    setArts((prevState) =>
      prevState.map((art) => {
        if (art.name === name) {
          art.favorite = !art.favorite;
          return art;
        } else {
          return art;
        }
      })
    );
    setFavorites(arts.filter((art) => art.favorite === true));
  }

  function addComment(name, comment) {
    setArts((prevState) =>
      prevState.map((art) => {
        if (art.name === name) {
          art.comments.push(comment);
          return art;
        } else {
          return art;
        }
      })
    );
    setFavorites(arts.filter((art) => art.favorite === true));
  }

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  if (!isLoading) {
    return (
      <>
        <GlobalStyle />
        <Component
          favorites={favorites}
          data={arts}
          toggleFavorite={toggleFavorite}
          addComment={addComment}
          {...pageProps}
        />
        <Nav />
      </>
    )
  }

}
