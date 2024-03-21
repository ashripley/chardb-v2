import { useSelector } from "react-redux"
import { CardStore, GalleryStore } from "../redux/store"
import { GalleryTile } from "./Custom/GalleryTile"
import { GalleryList } from "./Custom/GalleryList"
import { GalleryCard } from "./Custom/GalleryCard"

export const GalleryContent = () => {
  const { view } = useSelector((state: GalleryStore) => state.gallery)
  const { cards } = useSelector((state: CardStore) => state.card)

  console.log("cards", cards)

  return (
    <>
      {view === "card" ? (
        <>
          {cards.map((card: Record<string, any>, index: number) => (
            <GalleryCard key={index} card={card} />
          ))}
        </>
      ) : view === "tile" ? (
        <>
          <GalleryTile />
        </>
      ) : (
        <>
          <GalleryList />
        </>
      )}
    </>
  )
}
