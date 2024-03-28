import { AllAttributes } from "../queries/allAttributes"
import { setAttributes } from "../../redux/studio"
import { Dispatch, UnknownAction } from "@reduxjs/toolkit"

export const fetchAttributes = async (dispatch: Dispatch<UnknownAction>) => {
  try {
    const fetchedAttributes = await AllAttributes()
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
