import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface StoreState {
  tempPokemon: Record<string, any> | null
}

const initialState: StoreState = {
  tempPokemon: {},
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    updatePokemon: (
      state,
      action: PayloadAction<StoreState["tempPokemon"]>
    ) => {
      console.log("action.payload", action.payload)
      state.tempPokemon = { ...state.tempPokemon, ...action.payload }
      console.log("state.tempPokemon", state.tempPokemon)
    },
  },
})

export const { updatePokemon } = cardSlice.actions

export default cardSlice.reducer
