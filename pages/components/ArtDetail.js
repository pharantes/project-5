import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import styled from "styled-components";
import AddCommentForm from "./AddCommentForm";

const ArtBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;
const StyledName = styled.span`
  font-size: 1rem;
  padding: .5rem 0;
`;
const ColorDiv = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: blue;
`;
const ColorWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 2rem 0;
`;
const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledTitle = styled.h4`
  font-size: 1.2rem;
`;
const StyledUl = styled.ul`
list-decoration-style: none;
padding: 0;
`;
const ImageContainer = styled.div`
  height: 540px;
  width: 100%;
  position: relative;
`;
export default function ArtDetail({ art, toggleFavorite, addComment }) {
  return (
    <ArtBox>
      <TitleWrap>
        <StyledTitle>
          <Link href={`/${art?.slug}`}>{art?.name}</Link>
        </StyledTitle>
        <Icon
          favorite={art?.favorite}
          name={art?.name}
          onToggleFavorite={toggleFavorite}
        />
      </TitleWrap>
      <ImageContainer>
        <Image
          alt={`This image is ${art?.name} from ${art?.artist}`}
          src={art?.imageSource}
          fill
          objectFit="cover"
          style={{ borderRadius: "16px", }}
        />
      </ImageContainer>
      <InfoWrap>
        <StyledName>{art?.artist}</StyledName>
        <StyledName>{art?.genre}</StyledName>
        <StyledName>Year: {art?.year}</StyledName>
      </InfoWrap>
      <StyledName>Color pallet: </StyledName>

      <ColorWrap>
        {art?.colors.map((color, index) => {
          return <ColorDiv key={index} style={{ backgroundColor: color }} />;
        })}
      </ColorWrap>
      <AddCommentForm art={art} onAddComment={addComment} />
      <StyledName>Comments: </StyledName>
      <StyledUl>
        {art?.comments?.map((comment, index) => {
          return <li key={index}>{comment}</li>;
        })}
      </StyledUl>
    </ArtBox>
  );
}
