import { validate } from '../../utils/validation';
import {
  combineValidators,
  isBoolean,
  isNumber,
  isObject,
  isOptional,
  isString,
} from '../../utils/validation/validators';
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
