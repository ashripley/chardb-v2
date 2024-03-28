import { doc, updateDoc } from "firebase/firestore"
import { firestore } from "../../services/firebase.config"

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
