import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { DBType, StudioViewType } from "../config"

interface StoreState {
  view: StudioViewType
  allPokemon: Record<string, any>
  attributes: Record<string, any>
  dbType: DBType
  attribute: Record<string, any>
  isDirty: boolean
}

const initialState: StoreState = {
  view: "create",
  allPokemon: {},
  attributes: {},
  dbType: "set",
  attribute: {},
  isDirty: false,
}

export const studioSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {
    updateView: (state, action: PayloadAction<StoreState["view"]>) => {
      state.view = action.payload
    },
    setAllPokemon: (state, action: PayloadAction<StoreState["allPokemon"]>) => {
      state.allPokemon = action.payload
    },
    setAttributes: (state, action: PayloadAction<StoreState["attributes"]>) => {
      state.attributes = action.payload
    },
    setDBType: (state, action: PayloadAction<StoreState["dbType"]>) => {
      state.dbType = action.payload
    },
    updateAttribute: (
      state,
      action: PayloadAction<StoreState["attribute"]>
    ) => {
      if (Object.keys(action.payload).length) {
        state.isDirty = true
        state.attribute = { ...state.attribute, ...action.payload }
      } else {
        state.attribute = {}
      }

      console.log("action.payload", action.payload)
      console.log("state.attribute", state.attribute)
    },
    setIsDirty: (state, action: PayloadAction<StoreState["isDirty"]>) => {
      state.isDirty = action.payload
    },
  },
})

export const {
  updateView,
  setAllPokemon,
  setDBType,
  updateAttribute,
  setIsDirty,
  setAttributes,
} = studioSlice.actions

export default studioSlice.reducer
