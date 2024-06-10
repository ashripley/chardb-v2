import { validate } from '../../helpers/validate';
import {
  combineValidators,
  isBoolean,
  isNumber,
  isObject,
  isOptional,
} from '../../helpers/validators';
import { Theme } from '../../theme/theme';

interface AttributeCardDefinition {
  type: Theme['colors']['types'];
}

interface PokemonDefinition {
  name: string;
  type: string;
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
