import { useState } from "react";
import GlobalStyle from "../styles";
import Nav from "./components/NavBar";
import useLocalStorage from "use-local-storage-state";

const url = "https://example-apis.vercel.app/api/art"
const response = await fetch(url);
const data = await response.json();
const initialState = data?.map(art => {
  return { ...art, comments: [""], favorite: false }
})

export default function App({ Component, pageProps }) {
  // const [localArts, setLocalArts] = useLocalStorage("arts", { defaultValue: initialState })
  const [arts, setArts] = useState(initialState)
  const [favorites, setFavorites] = useState([])

  function setFavorite(name) {
    console.log(name)
  }

  return (
    <>
      <GlobalStyle />
      <Component data={arts} setFavorite={setFavorite} {...pageProps} />
      <Nav />
    </>
  );
}
