import { PayloadAction, createSlice, current } from "@reduxjs/toolkit"

export interface Card {
  cardId: string
  cardType: string
  condition: string
  evolutions: {
    first: {
      image: string
      name: string
    }
    second?: {
      image: string
      name: string
    }
    third?: {
      image: string
      name: string
    }
  }
  id: number
  image: string
  name: string
  pokemonId: string
  quantity: number
  set: string
  setNumber: string
  type: string
  year: number
  isGraded?: boolean
  grading?: number
}

interface StoreState {
  tempPokemon: Record<string, any>
  card: Card | Record<string, any>
  cards: Card[] | Record<string, any>[]
  isDirty: boolean
}

const initialState: StoreState = {
  tempPokemon: {},
  card: {},
  cards: [],
  isDirty: false,
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    updatePokemon: (
      state,
      action: PayloadAction<StoreState["tempPokemon"]>
    ) => {
      state.isDirty = true

      if (!Object.keys(action.payload).length) {
        state.tempPokemon = {}
        state.isDirty = false
      }
      state.tempPokemon = { ...state.tempPokemon, ...action.payload }
    },
    updateCard: (state, action: PayloadAction<StoreState["card"]>) => {
      state.isDirty = true

      if (!Object.keys(action.payload).length) {
        state.card = {}
        state.isDirty = false
      }

      if (!action.payload["cardId"])
        state.card = { ...state.card, ...action.payload }
      else state.card = { ...action.payload }
    },
    setCards: (state, action: PayloadAction<StoreState["cards"]>) => {
      console.log("action.payload", action.payload)
      state.cards = action.payload
    },
    setIsDirty: (state, action: PayloadAction<StoreState["isDirty"]>) => {
      state.isDirty = action.payload
    },
  },
})

export const { updatePokemon, setCards, setIsDirty, updateCard } =
  cardSlice.actions

export default cardSlice.reducer
