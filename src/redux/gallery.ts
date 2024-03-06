import { createSlice } from "@reduxjs/toolkit"

interface StoreState {}

const initialState: StoreState = {}

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
})

export const {} = gallerySlice.actions

export default gallerySlice.reducer
