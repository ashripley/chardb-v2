import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { GalleryApp, GalleryViewType } from "../config"

interface StoreState {
  view: GalleryViewType
  app: GalleryApp
}

const initialState: StoreState = {
  view: "card",
  app: "cards",
}

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<StoreState["view"]>) => {
      console.log("action.payload", action.payload)
      state.view = action.payload
    },
    setApp: (state, action: PayloadAction<StoreState["app"]>) => {
      state.app = action.payload
    },
  },
})

export const { setView, setApp } = gallerySlice.actions

export default gallerySlice.reducer
