import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface StoreState {
  tempPokemon: Record<string, any>
  cards: Record<string, any>[]
  isDirty: boolean
}

const initialState: StoreState = {
  tempPokemon: {},
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
    setCards: (state, action: PayloadAction<StoreState["cards"]>) => {
      state.cards = action.payload
    },
    setIsDirty: (state, action: PayloadAction<StoreState["isDirty"]>) => {
      state.isDirty = action.payload
    },
  },
})

export const { updatePokemon, setCards, setIsDirty } = cardSlice.actions

export default cardSlice.reducer
