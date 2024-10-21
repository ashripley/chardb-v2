import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import {
  deleteField,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { firestore } from '../../services/firebase.config';
import { upperCaseFirst } from '../../utils/upperCaseFirst';
import { PokemonDefinition } from './pokemonDefinition';
import { setPokemon } from '../../redux/root';

export const allPokemon = async (dispatch: Dispatch<UnknownAction>) => {
  const docRef = doc(firestore, 'pokemon', 'data');
  const docSnap = await getDoc(docRef);

  const response = docSnap.data() || {};

  const pokemonToDispatch: PokemonDefinition[] = Object.values(response);

  dispatch(setPokemon(pokemonToDispatch));
};

export const addPokemonMutation = async (pokemon: PokemonDefinition) => {
  const pokemonRef = doc(firestore, 'pokemon', 'data');

  try {
    setDoc(pokemonRef, [pokemon], { merge: true });

    notifications.show({
      title: 'Successfully Created!',
      message: `${upperCaseFirst(
        pokemon.name
      )} has successfully been created. Please see your pokemon in the Studio.`,
      color: 'lime',
    });
  } catch (error) {
    notifications.show({
      title: 'Error Creating Pokemon!',
      message: 'Please check the pokemon details and try again.',
      color: 'red',
    });
    throw new Error(`Error adding the pokemon to the db: ${error}`);
  }
};

export const deletePokemonMutation = async (name: string) => {
  const pokemonRef = doc(firestore, 'pokemon', 'data');

  // remove data from db
  try {
    // Remove the field in the data document that matches the name passed in
    await updateDoc(pokemonRef, {
      [name]: deleteField(),
    });

    notifications.show({
      title: 'Successfully Deleted!',
      message: `${upperCaseFirst(name)} has successfully been deleted.`,
      color: 'lime',
    });
  } catch (error) {
    notifications.show({
      title: 'Error Deleting Pokemon!',
      message: 'Please check the pokemon details and try again.',
      color: 'red',
    });
    throw new Error(`Error removing the pokemon from the db: ${error}`);
  }
};

export const addBulkPokemonMutation = async (pokemon: PokemonDefinition) => {
  const pokemonRef = doc(firestore, 'pokemon', 'data');
  // write to db
  try {
    setDoc(pokemonRef, { [pokemon.name]: pokemon }, { merge: true });
  } catch (error) {
    throw new Error(`Error adding the pokemon to the db: ${error}`);
  }
};
