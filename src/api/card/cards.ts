import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import {
  deleteField,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { firestore } from '../../services/firebase.config';
import { v4 as uuidv4 } from 'uuid';
import { notifications } from '@mantine/notifications';
import { upperCaseFirst } from '../../helpers/upperCaseFirst';
import { CardDefinition } from './cardDefinition';
import { PokemonDefinition } from '../pokemon';
import { setCards } from '../../redux/root';

export const allCards = async (dispatch: Dispatch<UnknownAction>) => {
  let mappedCardsArray: CardDefinition[] = [];

  try {
    const docRef = doc(firestore, 'cards', 'data');
    const docSnap = await getDoc(docRef);

    const cards = docSnap.data() || {};

    Object.entries(cards)
      .sort()
      .forEach(
        ([key, value]) =>
          (mappedCardsArray = [
            ...mappedCardsArray,
            { ['cardId']: key, ...value },
          ])
      );

    dispatch(setCards(mappedCardsArray));
  } catch (error) {
    throw new Error(`${error}`);
  } finally {
    //
  }
};

export const addCardMutation = (
  card: Pick<
    CardDefinition,
    'attributes' | 'meta' | 'pokemonData' | 'quantity' | 'setNumber'
  >,
  pokemon: PokemonDefinition[]
) => {
  const pokemonRef = doc(firestore, 'cards', 'data');

  const pokemonData = pokemon
    .filter((pk) => pk.name === card.pokemonData.name.toLowerCase())
    .shift();

  const cardId = uuidv4();

  const cardToAdd = {
    cardId,
    quantity: card.quantity,
    setNumber: card.setNumber,
    attributes: card.attributes,
    pokemonData: {
      ...pokemonData,
    },
  };

  if (
    !['trainer', 'energy'].includes(cardToAdd.attributes.cardType) &&
    cardToAdd.pokemonData.name
  ) {
    // write to db
    try {
      setDoc(pokemonRef, { [cardId]: cardToAdd }, { merge: true });

      notifications.show({
        title: 'Successfully Created!',
        message: `${upperCaseFirst(
          cardToAdd.pokemonData.name
        )} has successfully been created. Please see your card in the Gallery.`,
        color: 'lime',
      });
    } catch (error) {
      notifications.show({
        title: 'Error Creating Card!',
        message: 'Please check the card details and try again.',
        color: 'red',
      });
      throw new Error(`Error adding the pokemon card to the db: ${error}`);
    }
  } else {
    setDoc(doc(firestore, 'cards', cardId), {
      ...card,
      cardId,
    });
  }
};

export const updateCardMutation = async (card: Record<string, any>) => {
  const cardRef = doc(firestore, 'cards', 'data');

  try {
    await updateDoc(cardRef, {
      [card.cardId]: card,
    });
    notifications.show({
      title: 'Successfully Updated!',
      message: `${upperCaseFirst(
        card.name
      )} has successfully been updated. Please see your card in the Gallery.`,
      color: 'lime',
    });
  } catch (error) {
    notifications.show({
      title: 'Error Updating Card!',
      message: 'Please check the card details and try again.',
      color: 'red',
    });
    throw new Error(`Error updating the pokemon card in the db: ${error}`);
  }
};

export const deleteCardMutation = async (cardId: string) => {
  const cardRef = doc(firestore, 'cards', 'data');

  try {
    await updateDoc(cardRef, {
      [cardId]: deleteField(),
    });

    notifications.show({
      title: 'Successfully Deleted!',
      message: 'Card has successfully been deleted.',
      color: 'lime',
    });
  } catch (error) {
    notifications.show({
      title: 'Error Deleting Card!',
      message: 'Please check the card details and try again.',
      color: 'red',
    });
    throw new Error(`Error deleting the pokemon card from the db: ${error}`);
  }
};
