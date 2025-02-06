import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

const ArtsListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
`;
const ArtsListLi = styled.li`
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
  max-width: 360px;
`;
const StyledTitle = styled.h4`
  font-size: 1.2rem;
`;
export default function ArtsList({ data, toggleFavorite }) {

  return (
    <ArtsListUl>
      {data?.map((art, index) => {
        return (
          <ArtsListLi key={index}>
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
            <Image
              alt={`This image is ${art?.name} from ${art?.artist}`}
              src={art?.imageSource}
              width={360}
              height={480}
              style={{
                borderRadius: "8px",
              }}
            />
            <StyledName><strong>Artist:</strong> {art?.artist}</StyledName>

          </ArtsListLi>
        );
      })}
    </ArtsListUl>
  );
}
