import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import styled from "styled-components";
import AddCommentForm from "./AddCommentForm";

const ArtBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
const StyledLink = styled(Link)`
  font-size: 1.2rem;
  padding: 0.5rem 0;
  text-decoration: none;
`;
const StyledName = styled.p`
  font-size: 1rem;
  text-decoration: none;
`;
const ColorDiv = styled.div`
  height: 50px;
  width: 50px;

  border-radius: 50%;
  background-color: blue;
`;
const ColorWrap = styled.div`
  height: 100px;
  display: flex;
  gap: 0.5rem;
`;
export default function ArtDetail({ art, toggleFavorite, addComment }) {
  return (
    <ArtBox>
      <Icon
        favorite={art.favorite}
        name={art.name}
        onToggleFavorite={toggleFavorite}
      />
      <StyledLink href={`/${art.slug}`}>Art name: {art.name}</StyledLink>
      <Image
        alt={`This image is ${art.name} from ${art.artist}`}
        src={art.imageSource}
        width={160}
        height={320}
      />
      <StyledName>Artist: {art.artist}</StyledName>
      <StyledName>Year: {art.year}</StyledName>
      <StyledName>Genre: {art.genre}</StyledName>
      <StyledName>Color pallet: </StyledName>
      <ColorWrap>
        {art.colors.map((color, index) => {
          return <ColorDiv key={index} style={{ backgroundColor: color }} />;
        })}
      </ColorWrap>
      <AddCommentForm art={art} onAddComment={addComment} />
      <StyledName>Comments: </StyledName>
      <ul>
        {art.comments?.map((comment, index) => {
          return <li key={index}>{comment}</li>;
        })}
      </ul>
    </ArtBox>
  );
}
