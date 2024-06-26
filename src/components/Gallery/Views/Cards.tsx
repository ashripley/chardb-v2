import { useSelector } from "react-redux"
import { CardStore, GalleryStore } from "../../../redux/store"
import { GalleryTile } from "../Tiles/GalleryTile"
import { GalleryCard } from "../Cards/GalleryCard"
import { Flex, Loader, Space } from "@mantine/core"
import { CustomPagination } from "../../Common/CustomPagination"
import { useEffect, useState } from "react"
import { Card } from "../../../redux/card"
import { NoResultsFound } from "../../Common/NoResultsFound"
import { theme } from "../../../theme/theme"

export const Cards = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filteredCards, setFilteredCards] = useState<Card[]>([])
  const { view, searchTerm } = useSelector(
    (state: GalleryStore) => state.gallery
  )
  const { cards } = useSelector((state: CardStore) => state.card)

  useEffect(() => {
    if (searchTerm === "" && cards.length > 0) {
      setIsLoading(false)
      setFilteredCards(cards as Card[])
    }
  }, [cards])

  const cardsPerPage = 50
  const totalCards = filteredCards.length
  const totalPages = Math.ceil(totalCards / cardsPerPage)

  const startIndex = (currentPage - 1) * cardsPerPage
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards)

  useEffect(() => {
    if (searchTerm !== "" && cards.length > 0) {
      setIsLoading(false)
      const filteredCards: Record<string, any>[] = cards.filter((card) =>
        card.name.toLowerCase().includes(searchTerm)
      )

      setFilteredCards(filteredCards as Card[])
    } else setFilteredCards(cards as Card[])
  }, [searchTerm])

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber)

  const CardsMap: Record<string, any> = {
    card: GalleryCard,
    tile: GalleryTile,
  }

  const CardsView = CardsMap[view]

  return (
    <>
      {isLoading ? (
        <Flex justify="center" align={"center"} h={"65vh"}>
          <Loader color={theme.colours.accents.char} size="lg" type="dots" />
        </Flex>
      ) : filteredCards.length ? (
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
