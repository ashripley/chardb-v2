import { DashboardApp } from "./../config"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface StoreState {
  app: DashboardApp
}

const initialState: StoreState = {
  app: "analytics",
}

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    updateApp: (state, action: PayloadAction<StoreState["app"]>) => {
      state.app = action.payload
    },
  },
})

export const { updateApp } = dashboardSlice.actions

export default dashboardSlice.reducer
