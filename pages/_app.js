import { useState } from "react";
import GlobalStyle from "../styles";
import Nav from "./components/NavBar";
import useLocalStorage from "use-local-storage-state";

const url = "https://example-apis.vercel.app/api/art";
const response = await fetch(url);
const data = await response.json();
const initialState = data?.map((art) => {
  return { ...art, comments: [], favorite: false };
});
export default function App({ Component, pageProps }) {
  // const [localArts, setLocalArts] = useLocalStorage("arts", { defaultValue: initialState })
  const [arts, setArts] = useLocalStorage("arts", {
    defaultValue: initialState,
  });
  const [favorites, setFavorites] = useLocalStorage("favorites", {
    defaultValue: [],
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
  );
}
