import {
  IdDefinition,
  PokemonDefinition,
  SetAttributeDefinition,
} from '../../definitions';
import { validate } from '../../helpers/validate';
import {
  combineValidators,
  isNumber,
  isObject,
  isOptional,
} from '../../helpers/validators';

export interface CardDefinition {
  cardId: IdDefinition;
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

export function validateCardDefinition(
  cardDefinition: CardDefinition
): asserts cardDefinition is CardDefinition {
  validate(cardDefinition, 'cardId', isNumber);
  validate(cardDefinition, 'quantity', isNumber);
  validate(cardDefinition, 'setNumber', isNumber);
  validate(cardDefinition, 'meta', isOptionalObject);

  // check for validation on AttributeCardDefinition and PokemonDefinition

  if (!cardDefinition.meta) return;
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
