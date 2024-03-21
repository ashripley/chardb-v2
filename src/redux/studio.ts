import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { StudioViewType } from "../config"

interface StoreState {
  view: StudioViewType
  allPokemon: Record<string, any>
}

const initialState: StoreState = {
  view: "create",
  allPokemon: {},
}

export const studioSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {
    updateView: (state, action: PayloadAction<StoreState["view"]>) => {
      state.view = action.payload
    },
    setAllPokemon: (state, action: PayloadAction<StoreState["allPokemon"]>) => {
      console.log("state.allPokemon", state.allPokemon)
      console.log("action.payload: all pokemon: ", action.payload)
      state.allPokemon = action.payload
    },
  },
})

export const { updateView, setAllPokemon } = studioSlice.actions

export default studioSlice.reducer
