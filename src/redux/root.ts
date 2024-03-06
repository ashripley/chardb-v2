import { createSlice } from "@reduxjs/toolkit"

interface StoreState {}

const initialState: StoreState = {}

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {},
})

export const {} = rootSlice.actions

export default rootSlice.reducer
