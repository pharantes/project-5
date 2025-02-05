import styled from "styled-components";
import ArtDetail from "./ArtDetail";

const ArtsListUl = styled.ul`
  list-style-type: none;
`;
export default function ArtsList({ data, toggleFavorite, addComment }) {
  // console.log(data)

  return (
    <ArtsListUl>
      {data.map((art, index) => {
        return (
          <li key={index}>
            <ArtDetail
              art={art}
              toggleFavorite={toggleFavorite}
              addComment={addComment}
            />
          </li>
        );
      })}
    </ArtsListUl>
  );
}
