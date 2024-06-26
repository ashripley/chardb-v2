import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./root"
import galleryReducer from "./gallery"
import studioReducer from "./studio"
import cardReducer from "./card"
import dashboardReducer from "./dashboard"

const store = configureStore({
  reducer: {
    root: rootReducer,
    gallery: galleryReducer,
    studio: studioReducer,
    card: cardReducer,
    dashboard: dashboardReducer,
  },
})

export type RootStore = ReturnType<typeof store.getState>
export type GalleryStore = ReturnType<typeof store.getState>
export type StudioStore = ReturnType<typeof store.getState>
export type CardStore = ReturnType<typeof store.getState>
export type DashboardStore = ReturnType<typeof store.getState>

export default store
