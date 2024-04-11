import { useSelector } from "react-redux"
import { CardStore, GalleryStore } from "../../../redux/store"
import { GalleryTile } from "../Tiles/GalleryTile"
import { GalleryCard } from "../Cards/GalleryCard"
import { Flex, Space } from "@mantine/core"
import { CustomPagination } from "../../Common/CustomPagination"
import { useEffect, useState } from "react"
import { Card } from "../../../redux/card"
import { NoResultsFound } from "../../Common/NoResultsFound"

interface Props {
  searchedTerm: string
}

export const Cards = ({ searchedTerm }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filteredCards, setFilteredCards] = useState<Card[]>([])
  const { view } = useSelector((state: GalleryStore) => state.gallery)
  const { cards } = useSelector((state: CardStore) => state.card)

  const cardsPerPage = 50
  const totalCards = filteredCards.length
  const totalPages = Math.ceil(totalCards / cardsPerPage)

  const startIndex = (currentPage - 1) * cardsPerPage
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards)

  useEffect(() => {
    if (searchedTerm !== "") {
      const filteredCards: Record<string, any>[] = cards.filter((card) =>
        card.name.toLowerCase().includes(searchedTerm)
      )

      setFilteredCards(filteredCards as Card[])
    } else setFilteredCards(cards as Card[])
  }, [searchedTerm])

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber)

  const CardsMap: Record<string, any> = {
    card: GalleryCard,
    tile: GalleryTile,
  }

  const CardsView = CardsMap[view]

  return (
    <>
      {filteredCards.length ? (
        <>
          <Flex justify="space-evenly" wrap="wrap" gap={20}>
            {filteredCards
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
      ) : (
        <NoResultsFound />
      )}
    </>
  )
}
