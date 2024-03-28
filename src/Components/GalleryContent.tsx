import { useSelector } from "react-redux"
import { CardStore, GalleryStore } from "../redux/store"
import { GalleryTile } from "./Custom/GalleryTile"
import { GalleryCard } from "./Custom/GalleryCard"
import { Pokedex } from "./Pokedex"

export const GalleryContent = () => {
  const { view, app } = useSelector((state: GalleryStore) => state.gallery)
  const { cards } = useSelector((state: CardStore) => state.card)

  const viewMap: Record<string, any> = {
    card: GalleryCard,
    tile: GalleryTile,
  }

  const GalleryViewComponent = viewMap[view]

  return (
    <>
      {app === "cards" ? (
        cards.map((card: Record<string, any>, index: number) => (
          <GalleryViewComponent key={index} card={card} />
        ))
      ) : (
        <Pokedex />
      )}
    </>
  )
}
