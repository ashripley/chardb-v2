import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppType, FormType } from '../config';
import { PokemonDefinition } from '../api/pokemon';
import { AttributeCardDefinition, CardDefinition } from '../api/card';
import { AttributeDefinition } from '../api/attribute';

interface StoreState {
  page: AppType;
  pokemon: PokemonDefinition[];
  cardAttributes: AttributeCardDefinition[];
  attributes: AttributeDefinition[];
  cards: CardDefinition[];
  formType: FormType;
}

const initialState: StoreState = {
  page: 'Home',
  pokemon: [],
  cardAttributes: [],
  attributes: [],
  cards: [],
  formType: 'set',
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    updateApp: (state, action: PayloadAction<StoreState['page']>) => {
      state.page = action.payload;
    },
    setPokemon: (state, action: PayloadAction<StoreState['pokemon']>) => {
      state.pokemon = action.payload;
    },
    setAttributes: (state, action: PayloadAction<StoreState['attributes']>) => {
      state.attributes = action.payload;
    },
    setFormType: (state, action: PayloadAction<StoreState['formType']>) => {
      state.formType = action.payload;
    },
    setCards: (state, action: PayloadAction<StoreState['cards']>) => {
      state.cards = action.payload;
    },
  },
});

export const { updateApp, setPokemon, setAttributes, setFormType, setCards } =
  rootSlice.actions;

export default rootSlice.reducer;
