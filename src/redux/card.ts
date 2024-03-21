import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface StoreState {
  tempPokemon: Record<string, any> | null
  cards: Record<string, any>[]
}

const initialState: StoreState = {
  tempPokemon: {},
  cards: [],
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    updatePokemon: (
      state,
      action: PayloadAction<StoreState["tempPokemon"]>
    ) => {
      state.tempPokemon = { ...state.tempPokemon, ...action.payload }
    },
    setCards: (state, action: PayloadAction<StoreState["cards"]>) => {
      state.cards = action.payload
    },
  },
})

export const { updatePokemon, setCards } = cardSlice.actions

export default cardSlice.reducer
