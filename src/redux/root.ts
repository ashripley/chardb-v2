import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  AppType,
  FormType,
  GalleryApp,
  GalleryViewType,
  isMobile,
  StudioViewType,
} from '../config';
import { PokemonDefinition } from '../api/pokemon';
import { AttributeCardDefinition, CardDefinition } from '../api/card';
import { AttributeDefinition } from '../api/attribute';
import { TempCardDefinition } from '../api/card/cardDefinition';

interface StoreState {
  page: AppType;
  app: GalleryApp;
  pokemon: PokemonDefinition[];
  cardAttributes: AttributeCardDefinition[];
  attributes: AttributeDefinition[];
  cards: CardDefinition[];
  currentCard: TempCardDefinition | undefined;
  formType: FormType;
  studioView: StudioViewType;
  galleryView: GalleryViewType;
  searchTerm: string;
}

const initialState: StoreState = {
  page: 'Home',
  app: 'cards',
  pokemon: [],
  cardAttributes: [],
  attributes: [],
  cards: [],
  currentCard: undefined,
  formType: 'set',
  studioView: 'create',
  galleryView: isMobile ? 'tile' : 'card',
  searchTerm: '',
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    updateApp: (state, action: PayloadAction<StoreState['page']>) => {
      state.page = action.payload;
    },
    setApp: (state, action: PayloadAction<StoreState['app']>) => {
      state.app = action.payload;
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
    setCurrentCard: (
      state,
      action: PayloadAction<StoreState['currentCard']>
    ) => {
      state.currentCard = action.payload;
    },
    setStudioView: (state, action: PayloadAction<StoreState['studioView']>) => {
      state.studioView = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<StoreState['searchTerm']>) => {
      state.searchTerm = action.payload;
    },
    setGalleryView: (
      state,
      action: PayloadAction<StoreState['galleryView']>
    ) => {
      state.galleryView = action.payload;
    },
  },
});

export const {
  updateApp,
  setApp,
  setPokemon,
  setAttributes,
  setFormType,
  setCards,
  setCurrentCard,
  setStudioView,
  setGalleryView,
  setSearchTerm,
} = rootSlice.actions;

export default rootSlice.reducer;
