import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { GalleryViewType } from "../config"

interface StoreState {
  view: GalleryViewType
}

const initialState: StoreState = {
  view: "card",
}

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    updateView: (state, action: PayloadAction<StoreState["view"]>) => {
      state.view = action.payload
      console.log("action.payload", action.payload)
    },
  },
})

export const { updateView } = gallerySlice.actions

export default gallerySlice.reducer
