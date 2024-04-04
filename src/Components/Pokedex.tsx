import { StudioStore } from "../redux/store"
import { useSelector } from "react-redux"
import { PokedexTile } from "./PokedexTile"

export const Pokedex = () => {
  const { allPokemon } = useSelector((state: StudioStore) => state.studio)

  const sortedPokedexById = Object.fromEntries(
    Object.entries(allPokemon).sort(
      ([, { id: idA }], [, { id: idB }]) => idA - idB
    )
  )

  return (
    <>
      {Object.values(sortedPokedexById).map(
        (pokemon: Record<string, any>, index: number) => (
          <PokedexTile pokemon={pokemon} key={index} />
        )
      )}
    </>
  )
}
