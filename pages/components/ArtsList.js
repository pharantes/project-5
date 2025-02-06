import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

const ArtsList = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ArtItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledName = styled.p`
  margin-top: .4rem
  font-size: 1rem;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
`;
const StyledTitle = styled.h4`
  font-size: 1.2rem;
`;
const ImageContainer = styled.div`
  height: 540px;
  width: 100%;
  position: relative;
`;


export default function ArtsListComponent({ data, toggleFavorite }) {

  return (
    <ArtsList>
      {data?.map((art, index) => {
        return (
          <ArtItem key={index}>
            <TitleWrap>
              <Link href={`/${art?.slug}`}>
                <StyledTitle>{art?.name}</StyledTitle>
              </Link>
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
            <StyledName><strong>Artist:</strong> {art?.artist}</StyledName>

          </ArtItem>
        );
      })}
    </ArtsList>
  );
}
