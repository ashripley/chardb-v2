import { Dispatch, UnknownAction } from "@reduxjs/toolkit"
import { deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { firestore } from "../services/firebase.config"
import { setAllPokemon } from "../redux/studio"
import { notifications } from "@mantine/notifications"
import { upperCaseFirst } from "../helpers/upperCaseFirst"

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

    notifications.show({
      title: "Successfully Created!",
      message: `${upperCaseFirst(
        pokemon.name
      )} has successfully been created. Please see your pokemon in the Studio.`,
      color: "lime",
    })
  } catch (e) {
    notifications.show({
      title: "Error Creating Pokemon!",
      message: "Please check the pokemon details and try again.",
      color: "red",
    })
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

    notifications.show({
      title: "Successfully Deleted!",
      message: `${upperCaseFirst(name)} has successfully been deleted.`,
      color: "lime",
    })
  } catch (e) {
    notifications.show({
      title: "Error Deleting Pokemon!",
      message: "Please check the pokemon details and try again.",
      color: "red",
    })
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
