import GlobalStyle from "../styles";
import Nav from "./components/NavBar";
import { SWRConfig } from "swr";
import { ArtProvider } from "../utils/use-art-context"

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }} />
      <GlobalStyle />
      <ArtProvider>
        <>
          <Component
            {...pageProps}
          />
          <Nav />
        </>
      </ArtProvider>
    </>
  )
}


