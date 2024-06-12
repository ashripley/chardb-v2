import { validate } from '../../helpers/validate';
import {
  combineValidators,
  isBoolean,
  isNumber,
  isObject,
  isOptional,
  isString,
} from '../../helpers/validators';
import { SetAttributeDefinition } from '../attribute';
import { PokemonDefinition } from '../pokemon';

export interface CardDefinition {
  cardId: string;
  quantity: number;
  setNumber: number;
  attributes: AttributeCardDefinition;
  pokemonData: PokemonDefinition;
  meta?: unknown;
}

export interface AttributeCardDefinition {
  cardType: string;
  set: SetAttributeDefinition;
  rarity: string;
  condition: string;
  isGraded?: boolean;
  grading: number;
  meta?: unknown;
}

const isOptionalObject = combineValidators(isOptional, isObject);
const isOptionalBoolean = combineValidators(isOptional, isBoolean);

export function validateAttributeCardDefinition(
  attributeCardDefinition: AttributeCardDefinition
): asserts attributeCardDefinition is AttributeCardDefinition {
  validate(attributeCardDefinition, 'cardType', isString);
  validate(attributeCardDefinition, 'rarity', isString);
  validate(attributeCardDefinition, 'condition', isString);
  validate(attributeCardDefinition, 'isGraded', isOptionalBoolean);
  validate(attributeCardDefinition, 'grading', isNumber);
  validate(attributeCardDefinition, 'meta', isOptionalObject);
}

export function validateCardDefinition(
  cardDefinition: CardDefinition
): asserts cardDefinition is CardDefinition {
  validate(cardDefinition, 'cardId', isString);
  validate(cardDefinition, 'quantity', isNumber);
  validate(cardDefinition, 'setNumber', isNumber);
  validate(cardDefinition, 'meta', isOptionalObject);
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
