import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppType } from "../config"

interface StoreState {
  page: AppType
}

const initialState: StoreState = {
  page: "Home",
}

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    updateApp: (state, action: PayloadAction<StoreState["page"]>) => {
      state.page = action.payload
    },
  },
})

export const { updateApp } = rootSlice.actions

export default rootSlice.reducer
