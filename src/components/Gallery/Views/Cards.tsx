import { useSelector } from "react-redux"
import { CardStore, GalleryStore } from "../../../redux/store"
import { GalleryTile } from "../Tiles/GalleryTile"
import { GalleryCard } from "../Cards/GalleryCard"
import { Flex, Space } from "@mantine/core"
import { CustomPagination } from "../../Common/CustomPagination"
import { useState } from "react"

export const Cards = () => {
  const { view } = useSelector((state: GalleryStore) => state.gallery)
  const { cards } = useSelector((state: CardStore) => state.card)

  const [currentPage, setCurrentPage] = useState<number>(1)

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber)

  const cardsPerPage = 50
  const totalCards = cards.length
  const totalPages = Math.ceil(totalCards / cardsPerPage)

  const startIndex = (currentPage - 1) * cardsPerPage
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards)

  const CardsMap: Record<string, any> = {
    card: GalleryCard,
    tile: GalleryTile,
  }

  const CardsView = CardsMap[view]

  return (
    <>
      <Flex justify="space-evenly" wrap="wrap" gap={20}>
        {cards
          .slice(startIndex, endIndex)
          .map((card: Record<string, any>, index: number) => (
            <CardsView key={index} card={card} />
          ))}
      </Flex>
      <Space h={25} />
      <CustomPagination
        total={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  )
}
