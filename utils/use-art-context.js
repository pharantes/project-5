import { createContext, useContext, useEffect } from "react";
import useSWR from "swr";
import useLocalStorage from "use-local-storage-state";

const ArtContext = createContext();
export function useArtContext() {
    return useContext(ArtContext);
}
const URL = "https://example-apis.vercel.app/api/art";
async function fetcher(url) {
    const response = await fetch(url);
    return await response.json();
}

export const ArtProvider = ({ children }) => {
    const { data, isLoading, error } = useSWR(URL, fetcher);
    const initialState = data?.map((art) => {
        return { ...art, comments: [], favorite: false };
    });
    const [arts, setArts] = useLocalStorage("arts", {
        defaultValue: initialState,
    });

    const [favorites, setFavorites] = useLocalStorage("favorites", {
        defaultValue: [],
    });

    useEffect(() => {
        setArts((prevState) => prevState ? prevState : initialState);
    }, [setArts, initialState]);


    function toggleFavorite(name) {
        setArts((prevState) =>
            prevState?.map((art) => {
                if (art?.name === name) {
                    art.favorite = !art.favorite;
                    return art;
                } else {
                    return art;
                }
            })
        );
        setFavorites(arts.filter((art) => art?.favorite === true));
    }

    function addComment(name, comment) {
        setArts((prevState) =>
            prevState?.map((art) => {
                if (art?.name === name) {
                    art?.comments.push(comment);
                    return art;
                } else {
                    return art;
                }
            })
        );
        setFavorites(arts.filter((art) => art?.favorite === true));
    }
    return (
        <>
            <ArtContext.Provider value={{ arts, favorites, toggleFavorite, addComment, isLoading, error }}>
                {children}
            </ArtContext.Provider>
        </>
    );
};
