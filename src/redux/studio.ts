import { createSlice } from "@reduxjs/toolkit"

interface StoreState {}

const initialState: StoreState = {}

export const studioSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {},
})

export const {} = studioSlice.actions

export default studioSlice.reducer
