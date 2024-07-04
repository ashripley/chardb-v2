import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardDefinition } from '../api/card';

interface StoreState {
  tempCard?: CardDefinition;
  card?: CardDefinition;
  cards?: CardDefinition[];
  isDirty: boolean;
}

const initialState: StoreState = {
  isDirty: false,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    initiateTempCard: (
      state,
      action: PayloadAction<StoreState['tempCard']>
    ) => {
      state.tempCard = action.payload;
    },
    // updatePokemon: (state, action: PayloadAction<StoreState['tempCard']>) => {
    //   state.isDirty = true;

    //   if (!Object.keys(action.payload).length) {
    //     state.tempCard = {};
    //     state.isDirty = false;
    //   }
    //   state.tempCard = { ...state.tempCard, ...action.payload };
    // },
    // updateCard: (state, action: PayloadAction<StoreState['card']>) => {
    //   state.isDirty = true;

    //   if (!Object.keys(action.payload).length) {
    //     state.card = {};
    //     state.isDirty = false;
    //   }

    //   if (!action.payload['cardId'])
    //     state.card = { ...state.card, ...action.payload };
    //   else state.card = { ...action.payload };
    // },
    setCards: (state, action: PayloadAction<StoreState['cards']>) => {
      state.cards = action.payload;
    },
    setIsDirty: (state, action: PayloadAction<StoreState['isDirty']>) => {
      state.isDirty = action.payload;
    },
  },
});

export const { initiateTempCard, setCards, setIsDirty } = cardSlice.actions;

export default cardSlice.reducer;
