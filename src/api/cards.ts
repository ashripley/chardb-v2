import { Dispatch, UnknownAction } from "@reduxjs/toolkit"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { firestore } from "../services/firebase.config"
import { setCards } from "../redux/card"
import { customTheme } from "../customTheme"
import { v4 as uuidv4 } from "uuid"

export const allCards = async (dispatch: Dispatch<UnknownAction>) => {
  let mappedCardsArray: Record<string, any>[] = []

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
  const colour = customTheme.colours.types.normal

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
