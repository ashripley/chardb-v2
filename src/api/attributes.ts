import { deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
import { firestore } from "../services/firebase.config"
import { Dispatch, UnknownAction } from "@reduxjs/toolkit"
import { setAttributes } from "../redux/studio"

export const allAttributes = async (dispatch: Dispatch<UnknownAction>) => {
  try {
    const docRef = doc(firestore, "attributes", "data")
    const docSnap = await getDoc(docRef)
    const fetchedAttributes = docSnap.data() || {}

    const res = Object.values(fetchedAttributes)

    const attributes = res.reduce((acc, att) => {
      const { attribute, name, ...rest } = att

      if (!acc[attribute]) {
        acc[attribute] = [{ name, attribute, ...rest }]
      } else {
        acc[attribute].push({ name, attribute, ...rest })
      }

      return acc
    }, {})

    dispatch(setAttributes({ isCreate: false, ...attributes }))
  } catch (error) {
    console.error("Error fetching attributes:", error)
  }
}

export const addAttributeMutation = async (
  attribute: string,
  attributeObj: Record<string, any>
) => {
  const uuid = uuidv4()
  const attributeRef = doc(firestore, "attributes", "data")

  try {
    // attribute obj to write
    const data = {
      attributeId: uuid,
      attribute,
      ...attributeObj,
    }

    // write to db
    setDoc(
      attributeRef,
      { [`${attribute}_${attributeObj.name}`]: { ...data } },
      { merge: true }
    )
  } catch (error) {
    console.error("Error adding attribute to db:", error)
  }
}

export const deleteAttributeMutation = async (attributeId: string) => {
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
