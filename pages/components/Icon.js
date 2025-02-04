import Image from 'next/image'


export default function Icon({ favorite, setFavorite, name }) {
    return (
        <button onClick={() => setFavorite(name)} >
            <Image src={favorite ? "../../assets/favorite.svg" : "../../assets/not-favorite.svg"} width={20} height={20} alt='favorite icon' />
        </button>
    )
}
