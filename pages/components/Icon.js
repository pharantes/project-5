import Image from "next/image";

export default function Icon({ favorite, onToggleFavorite, name }) {
  const style = {
    backgroundColor: "transparent",
    border: "none",
    width: "20px",
  };
  return (
    <button style={style} onClick={() => onToggleFavorite(name)}>
      <Image
        src={favorite ? "/assets/favorite.svg" : "/assets/not-favorite.svg"}
        width={20}
        height={20}
        alt="favorite icon"
      />
    </button>
  );
}
