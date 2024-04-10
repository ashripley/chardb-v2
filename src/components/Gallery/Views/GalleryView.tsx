import { useSelector } from "react-redux"
import { CardStore, GalleryStore } from "../../../redux/store"
import { GalleryTile } from "../Tiles/GalleryTile"
import { GalleryCard } from "../Cards/GalleryCard"
import { Pokedex } from "./Pokedex"

export const GalleryView = () => {
  const { view, app } = useSelector((state: GalleryStore) => state.gallery)
  const { cards } = useSelector((state: CardStore) => state.card)

  const CardsMap: Record<string, any> = {
    card: GalleryCard,
    tile: GalleryTile,
  }

  const CardsView = CardsMap[view]

  return (
    <>
      {app === "cards" ? (
        cards.map((card: Record<string, any>, index: number) => (
          <CardsView key={index} card={card} />
        ))
      ) : (
        <Pokedex />
      )}
    </>
  )
}
