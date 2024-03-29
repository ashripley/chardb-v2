import { Dispatch, UnknownAction } from "@reduxjs/toolkit"
import { allCards } from "./allCards"
import { setCards } from "../../redux/card"

export const fetchCards = async (dispatch: Dispatch<UnknownAction>) => {
  let mappedCardsArray: Record<string, any>[] = []

  try {
    const cards = await allCards()

    Object.entries(cards[0]).forEach(
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
