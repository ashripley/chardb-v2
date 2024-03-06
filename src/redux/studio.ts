import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { StudioViewType } from "../config"

interface StoreState {
  view: StudioViewType
}

const initialState: StoreState = {
  view: "create",
}

export const studioSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {
    updateView: (state, action: PayloadAction<StoreState["view"]>) => {
      state.view = action.payload
    },
  },
})

export const {} = studioSlice.actions

export default studioSlice.reducer
