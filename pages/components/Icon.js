import Image from "next/image";

export default function Icon({ favorite, onToggleFavorite, name }) {
  const style = {
    backgroundColor: "transparent",
    border: "none",
  };
  return (
    <button style={style} onClick={() => onToggleFavorite(name)}>
      <Image
        src={favorite ? "/assets/favorite-yellow.svg" : "/assets/not-favorite.svg"}
        width={32}
        height={32}
        alt="favorite icon"
      />
    </button>
  );
}
