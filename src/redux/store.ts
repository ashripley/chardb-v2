import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./root"
import galleryReducer from "./gallery"
import studioReducer from "./studio"

const store = configureStore({
  reducer: {
    root: rootReducer,
    gallery: galleryReducer,
    studio: studioReducer,
  },
})

export type RootStore = ReturnType<typeof store.getState>
export type GalleryStore = ReturnType<typeof store.getState>
export type StudioStore = ReturnType<typeof store.getState>

export default store
