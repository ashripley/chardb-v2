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
    setView: (state, action: PayloadAction<StoreState["view"]>) => {
      state.view = action.payload
    },
  },
})

export const { setView } = gallerySlice.actions

export default gallerySlice.reducer
