import { validate } from '../../helpers/validate';
import {
  combineValidators,
  isBoolean,
  isNumber,
  isObject,
  isOptional,
  isString,
} from '../../helpers/validators';
import { PokemonDefinition } from '../pokemon';

export interface CardDefinition {
  cardId: string;
  quantity: number;
  setNumber: number;
  attributes: AttributeCardDefinition;
  pokemonData: PokemonDefinition;
  meta?: unknown;
}

export interface TempCardDefinition {
  pokemonData: PokemonDefinition;
  cardId?: string;
  quantity?: string;
  setNumber?: number;
  attributes?: AttributeCardDefinition;
  meta?: unknown;
}

export interface AttributeCardDefinition {
  cardType: string;
  set: string;
  rarity: string;
  condition: string;
  grading: number;
  isGraded?: boolean;
  meta?: unknown;
}

const isOptionalObject = combineValidators(isOptional, isObject);
const isOptionalString = combineValidators(isOptional, isString);
const isOptionalNumber = combineValidators(isOptional, isNumber);
const isOptionalBoolean = combineValidators(isOptional, isBoolean);

export function validateAttributeCardDefinition(
  attributeCardDefinition: AttributeCardDefinition
): asserts attributeCardDefinition is AttributeCardDefinition {
  validate(attributeCardDefinition, 'cardType', isString);
  validate(attributeCardDefinition, 'set', isString);
  validate(attributeCardDefinition, 'rarity', isString);
  validate(attributeCardDefinition, 'condition', isString);
  validate(attributeCardDefinition, 'grading', isNumber);
  validate(attributeCardDefinition, 'isGraded', isOptionalBoolean);
  validate(attributeCardDefinition, 'meta', isOptionalObject);
}

export function validateCardDefinition(
  cardDefinition: CardDefinition
): asserts cardDefinition is CardDefinition {
  if (cardDefinition.cardId) {
    validate(cardDefinition, 'cardId', isString);
  }

  validate(cardDefinition, 'quantity', isNumber);
  validate(cardDefinition, 'setNumber', isNumber);
  validate(cardDefinition, 'attributes', isObject);
  validate(cardDefinition, 'pokemonData', isObject);
  validate(cardDefinition, 'meta', isOptionalObject);
}

export function validateTempCardDefinition(
  tempCardDefinition: TempCardDefinition
): asserts tempCardDefinition is TempCardDefinition {
  validate(tempCardDefinition, 'pokemonData', isObject);
  validate(tempCardDefinition, 'quantity', isOptionalNumber);
  validate(tempCardDefinition, 'setNumber', isOptionalNumber);
  validate(tempCardDefinition, 'attributes', isOptionalObject);
  validate(tempCardDefinition, 'pokemonData', isOptionalObject);
  validate(tempCardDefinition, 'meta', isOptionalObject);
  validate(tempCardDefinition, 'cardId', isOptionalString);
}

/*

  cardDefinition={{
    attributes: {
      cardType: 'holo',
      condition: 'excellent',
      grading: 9,
      rarity: 'rare',
      set: {
        name: 'Fossil',
        totalCards: 84,
        year: 1999,
      },
      isGraded: true,
    },
    cardId: 123,
    pokemonData: {
      evolutionChain: {
        first: {
          name: 'charmander',
          imageUrl:
            'https://img.pokemondb.net/sprites/home/normal/charmander.png',
        },
        second: {
          imageUrl:
            'https://img.pokemondb.net/sprites/home/normal/charmeleon.png',
          name: 'Charmeleon',
        },
        third: {
          imageUrl:
            'https://img.pokemondb.net/sprites/home/normal/charizard.png',
          name: 'Charizard',
        },
      },
      id: 4,
      imageUrl:
        'https://img.pokemondb.net/sprites/home/normal/charmander.png',
      name: 'charmander',
      type: 'fire',
    },
    quantity: 2,
    setNumber: 4,
  }}

*/

// {
//   "type": "card",
//   "pokemonData": {
//       "name": "Abra"
//   },
//   "attributes": {
//       "set": "Base",
//       "cardType": "Holo",
//       "condition": "Excellent",
//       "isGraded": ""
//   },
//   "setNumber": 2,
//   "quantity": 2
// }
