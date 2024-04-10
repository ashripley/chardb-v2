import { Dispatch, UnknownAction } from "@reduxjs/toolkit"
import { deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { firestore } from "../services/firebase.config"
import { Card, setCards } from "../redux/card"
import { theme } from "../customTheme"
import { v4 as uuidv4 } from "uuid"

export const allCards = async (dispatch: Dispatch<UnknownAction>) => {
  let mappedCardsArray: Card[] = []

  try {
    const docRef = doc(firestore, "cards", "data")
    const docSnap = await getDoc(docRef)

    const cards = docSnap.data() || {}

    Object.entries(cards)
      .sort()
      .forEach(
        ([key, value]) =>
          (mappedCardsArray = [
            ...mappedCardsArray,
            { ["cardId"]: key, ...value },
          ])
      )

    dispatch(setCards(mappedCardsArray))
  } catch (e) {
    console.error(e)
  } finally {
  }
}

export const addCardMutation = (pokemon: Record<string, any>) => {
  const { type, name, set, setNumber, year, quantity, attribute } = pokemon
  const pokemonRef = doc(firestore, "cards", "data")

  const uniqueId = uuidv4()
  const colour = theme.colours.types.normal

  if (!["trainer", "energy"].includes(attribute)) {
    // write to db
    try {
      setDoc(
        pokemonRef,
        { [name + "-" + uniqueId]: { ...pokemon } },
        { merge: true }
      )
    } catch (e) {
      console.error("Error adding the pokemon card to the db: ", e)
    }
  } else {
    setDoc(doc(firestore, "cards", uniqueId), {
      cardId: uniqueId,
      id: "",
      chainId: "",
      evolutionChain: {},
      name,
      type,
      set,
      setNumber,
      year,
      colour,
      quantity,
      attribute,
      url: {
        front: "",
        back: "",
      },
    })
  }
}

export const updateCardMutation = async (card: Record<string, any>) => {
  const cardRef = doc(firestore, "cards", "data")

  try {
    await updateDoc(cardRef, {
      [card.cardId]: card,
    })
  } catch (e) {
    console.error("Error updating the pokemon card in the db: ", e)
  }
}

export const deleteCardMutation = async (card: Record<string, any>) => {
  const cardRef = doc(firestore, "cards", "data")

  try {
    await updateDoc(cardRef, {
      [card.cardId]: deleteField(),
    })
  } catch (e) {
    console.error("Error deleting the pokemon card in the db: ", e)
  }
}
