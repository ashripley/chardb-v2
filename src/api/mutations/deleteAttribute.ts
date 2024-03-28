import { doc, updateDoc, deleteField } from "firebase/firestore"
import { firestore } from "../../services/firebase.config"

export const deleteAttribute = async (attributeId: string) => {
  const attributeRef = doc(firestore, "attributes", "data")

  // remove attribute from db
  try {
    // Remove the field in the data document that matches the name passed in
    await updateDoc(attributeRef, {
      [attributeId]: deleteField(),
    })
  } catch (e) {
    console.error("Error removing the attribute from the db: ", e)
  }
}
