import { validate } from '../../helpers/validate';
import {
  combineValidators,
  isNumber,
  isObject,
  isString,
} from '../../helpers/validators';

export interface AttributeDefinition {
  type: string;
  id: number;
  name: string;
  meta?: unknown;
}

export interface TypeAttributeDefinition extends AttributeDefinition {
  type: 'type';
  meta: {
    color: string;
  };
}

export interface SetAttributeDefinition extends AttributeDefinition {
  type: 'set';
  meta: {
    totalCards: number;
    year: number;
  };
}

export interface CardTypeAttributeDefinition extends AttributeDefinition {
  type: 'cardType';
  meta: unknown;
}

export interface RarityAttributeDefinition extends AttributeDefinition {
  type: 'rarity';
  meta: unknown;
}

export interface ConditionAttributeDefinition extends AttributeDefinition {
  type: 'condition';
  meta: unknown;
}

const isOptionalObject = combineValidators(isString, isObject);

export function validateAttributeDefinition(
  attributeDefinition: AttributeDefinition
): asserts attributeDefinition is AttributeDefinition {
  validate(attributeDefinition, 'type', isString);
  validate(attributeDefinition, 'id', isString);
  validate(attributeDefinition, 'name', isString);
  validate(attributeDefinition, 'meta', isOptionalObject);
}

export function validateTypeAttributeDefinition(
  typeAttributeDefinition: TypeAttributeDefinition
): asserts typeAttributeDefinition is TypeAttributeDefinition {
  validate(typeAttributeDefinition, 'id', isString);
  validate(typeAttributeDefinition, 'name', isString);
  validate(typeAttributeDefinition, 'type', isString);
  validate(typeAttributeDefinition, 'meta', isOptionalObject);
  validate(typeAttributeDefinition.meta, 'color', isString);
}

export function validateSetAttributeDefinition(
  setAttributeDefinition: SetAttributeDefinition
): asserts setAttributeDefinition is SetAttributeDefinition {
  validate(setAttributeDefinition, 'id', isString);
  validate(setAttributeDefinition, 'name', isString);
  validate(setAttributeDefinition, 'type', isString);
  validate(setAttributeDefinition, 'meta', isOptionalObject);
  validate(setAttributeDefinition.meta, 'totalCards', isNumber);
  validate(setAttributeDefinition.meta, 'year', isNumber);
}
