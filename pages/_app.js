import GlobalStyle from "../styles";
import Nav from "./components/NavBar";
import Header from "./components/Header";
import { ArtProvider } from "../utils/use-art-context"


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ArtProvider>
        <>
          <Header />

          <Component
            {...pageProps}
          />
          <Nav />
        </>
      </ArtProvider>
    </>
  )
}


