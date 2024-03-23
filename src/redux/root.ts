import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppType } from "../config"

interface StoreState {
  app: AppType
}

const initialState: StoreState = {
  app: "Gallery",
}

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    updateApp: (state, action: PayloadAction<StoreState["app"]>) => {
      state.app = action.payload
    },
  },
})

export const { updateApp } = rootSlice.actions

export default rootSlice.reducer
