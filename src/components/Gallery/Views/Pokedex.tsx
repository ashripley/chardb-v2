import { StudioStore } from "../../../redux/store"
import { useSelector } from "react-redux"
import { PokedexTile } from "../Tiles/PokedexTile"
import { Flex, Space } from "@mantine/core"
import { CustomPagination } from "../../Common/CustomPagination"
import { useEffect, useState } from "react"
import { NoResultsFound } from "../../Common/NoResultsFound"

interface Props {
  searchedTerm: string
}

export const Pokedex = ({ searchedTerm }: Props) => {
  const { allPokemon } = useSelector((state: StudioStore) => state.studio)

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filteredPokedex, setFilteredPokedex] = useState<Record<string, any>[]>(
    []
  )

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber)

  const sortedPokedexById = Object.fromEntries(
    Object.entries(allPokemon).sort(
      ([, { id: idA }], [, { id: idB }]) => idA - idB
    )
  )

  const pokedex = Object.values(sortedPokedexById)

  const cardsPerPage = 50
  const totalCards = filteredPokedex.length
  const totalPages = Math.ceil(totalCards / cardsPerPage)

  const startIndex = (currentPage - 1) * cardsPerPage
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards)

  useEffect(() => {
    if (searchedTerm !== "") {
      const filteredPokedexCards = pokedex.filter((card) =>
        card.name.toLowerCase().includes(searchedTerm)
      )

      setFilteredPokedex(filteredPokedexCards)
    } else setFilteredPokedex(pokedex)
  }, [searchedTerm])

  return (
    <>
      {filteredPokedex.length ? (
        <>
          <Flex justify="space-evenly" wrap="wrap" gap={20}>
            {filteredPokedex
              .slice(startIndex, endIndex)
              .map((pokemon: Record<string, any>, index: number) => (
                <PokedexTile pokemon={pokemon} key={index} />
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
