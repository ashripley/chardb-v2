import { Dispatch, UnknownAction } from "@reduxjs/toolkit"
import { deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { firestore } from "../services/firebase.config"
import { setAllPokemon } from "../redux/studio"

export const allPokemon = async (dispatch: Dispatch<UnknownAction>) => {
  const docRef = doc(firestore, "pokemon", "data")
  const docSnap = await getDoc(docRef)

  const pokemon = docSnap.data() || {}

  dispatch(setAllPokemon(pokemon))
}

export const addPokemonMutation = async (pokemon: Record<string, any>) => {
  const pokemonRef = doc(firestore, "pokemon", "data")

  try {
    setDoc(pokemonRef, { [pokemon.name]: { ...pokemon } }, { merge: true })
  } catch (e) {
    console.error("Error adding the pokemon to the db: ", e)
  }
}

export const deletePokemonMutation = async (name: string) => {
  const pokemonRef = doc(firestore, "pokemon", "data")

  // remove data from db
  try {
    // Remove the field in the data document that matches the name passed in
    await updateDoc(pokemonRef, {
      [name]: deleteField(),
    })
  } catch (e) {
    console.error("Error removing the pokemon from the db: ", e)
  }
}

export const addBulkPokemonMutation = async (
  pokemon: Record<string, any>,
  name: string
) => {
  const pokemonRef = doc(firestore, "pokemon", "data")
  // write to db
  try {
    setDoc(pokemonRef, { [name]: { ...pokemon } }, { merge: true })
  } catch (e) {
    console.error("Error adding the pokemon to the db: ", e)
  }
}
