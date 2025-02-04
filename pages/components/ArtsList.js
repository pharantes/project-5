import styled from "styled-components";
import ArtDetail from "./ArtDetail";

const ArtsListUl = styled.ul`
 list-style-type: none;
`
export default function ArtsList({ data, setFavorite }) {
    // console.log(data)

    return (
        < ArtsListUl >
            {
                data.map((art, index) => {
                    return <li key={index}>
                        <ArtDetail art={art} setFavorite={setFavorite} />
                    </li>
                })
            }
        </ArtsListUl >
    )
}