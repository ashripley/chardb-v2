import { doc, setDoc } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
import { firestore } from "../../services/firebase.config"
import { customTheme } from "../../customTheme"

export const addPokemonCard = (pokemon: Record<string, any>) => {
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
