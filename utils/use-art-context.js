import { createContext, useContext } from "react";
import useSWR from "swr";
import useLocalStorage from "use-local-storage-state";

const ArtContext = createContext();

export function useArtContext() {
    return useContext(ArtContext);
}
const URL = "https://example-apis.vercel.app/api/art";
export const ArtProvider = ({ children }) => {

    const { data, isLoading, error } = useSWR(URL);
    const [favorites, setFavorites] = useLocalStorage("favorites", {
        defaultValue: [],
    });
    const initialState = data?.map((art) => {
        return { ...art, comments: [], favorite: false };
    });
    const [arts, setArts] = useLocalStorage("arts", {
        defaultValue: initialState,
    });

    function toggleFavorite(name) {
        setArts((prevState) =>
            prevState.map((art) => {
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
            prevState.map((art) => {
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
        <ArtContext.Provider value={{ arts, favorites, toggleFavorite, addComment, isLoading, error }}>
            {children}

        </ArtContext.Provider>
    );
};
