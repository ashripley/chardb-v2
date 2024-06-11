import { validate } from '../../helpers/validate';
import {
  combineValidators,
  isBoolean,
  isNumber,
  isObject,
  isOptional,
} from '../../helpers/validators';

export interface AttributeCardDefinition {
  cardType: string;
  set: Set;
  rarity: string;
  condition: string;
  isGraded?: boolean;
  grading: number;
}

export interface Set {
  name: string;
  year: number;
  totalCards: number;
}

export interface EvolutionDefinition {
  name: string;
  imageUrl: string;
}

export interface EvolutionChainDefinition {
  first: EvolutionDefinition;
  second?: EvolutionDefinition;
  third?: EvolutionDefinition;
}

export interface PokemonDefinition {
  name: string;
  id: number;
  evolutionChain: EvolutionChainDefinition;
  type: string;
  imageUrl: string;
  meta?: unknown;
}

export interface CardDefinition {
  cardId: number;
  quantity: number;
  setNumber: number;
  attributes: AttributeCardDefinition;
  pokemonData: PokemonDefinition;
  meta?: {
    isGraded: boolean;
    grading?: number;
  };
}

const isOptionalObject = combineValidators(isOptional, isObject);
const isOptionalNumber = combineValidators(isOptional, isNumber);

export function validateCardDefinition(
  cardDefinition: CardDefinition
): asserts cardDefinition is CardDefinition {
  validate(cardDefinition, 'cardId', isNumber);
  validate(cardDefinition, 'quantity', isNumber);
  validate(cardDefinition, 'setNumber', isNumber);
  validate(cardDefinition, 'meta', isOptionalObject);

  // check for validation on AttributeCardDefinition and PokemonDefinition

  if (!cardDefinition.meta) return;

  validate(cardDefinition.meta, 'isGraded', isBoolean);
  validate(cardDefinition.meta, 'grading', isOptionalNumber);
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
