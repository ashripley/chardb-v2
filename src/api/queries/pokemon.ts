import { Dispatch, UnknownAction } from "@reduxjs/toolkit"
import { AllPokemon } from "./allPokemon"
import { setAllPokemon } from "../../redux/studio"

export const fetchPokemonData = async (dispatch: Dispatch<UnknownAction>) => {
  const fetchedPokemonData = await AllPokemon()

  dispatch(setAllPokemon(fetchedPokemonData))
}
