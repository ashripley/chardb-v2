import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { GalleryApp, GalleryViewType, isMobile } from "../config"

interface StoreState {
  view: GalleryViewType
  app: GalleryApp
  searchTerm: string
}

const initialState: StoreState = {
  view: isMobile ? "tile" : "card",
  app: "cards",
  searchTerm: "",
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
    setSearchTerm: (state, action: PayloadAction<StoreState["searchTerm"]>) => {
      state.searchTerm = action.payload
    },
  },
})

export const { setView, setApp, setSearchTerm } = gallerySlice.actions

export default gallerySlice.reducer
