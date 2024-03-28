import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface StoreState {
  tempPokemon: Record<string, any>
  card: Record<string, any>
  cards: Record<string, any>[]
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
      state.card = { ...state.card, ...action.payload }

      console.log("card state", state.card)
    },
    setCards: (state, action: PayloadAction<StoreState["cards"]>) => {
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
