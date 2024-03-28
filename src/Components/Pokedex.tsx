import { StudioStore } from "../redux/store"
import { useSelector } from "react-redux"
import { PokedexTile } from "./PokedexTile"

export const Pokedex = () => {
  const { allPokemon } = useSelector((state: StudioStore) => state.studio)

  console.log("allPokemon", allPokemon)
  return (
    <>
      {Object.values(allPokemon).map(
        (pokemon: Record<string, any>, index: number) => (
          <PokedexTile pokemon={pokemon} key={index} />
        )
      )}
    </>
  )
}
