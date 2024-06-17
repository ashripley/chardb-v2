import { validate } from '../../helpers/validate';
import {
  combineValidators,
  isObject,
  isOptional,
  isString,
} from '../../helpers/validators';

export type Type = 'set' | 'cardType' | 'type' | 'condition' | 'rarity';

export interface AttributeDefinition {
  type: Type;
  id: string;
  name: string;
  meta?: unknown;
}

const isOptionalObject = combineValidators(isOptional, isObject);

export function validateAttributeDefinition(
  attributeDefinition: AttributeDefinition
): asserts attributeDefinition is AttributeDefinition {
  validate(attributeDefinition, 'type', isString);
  validate(attributeDefinition, 'id', isString);
  validate(attributeDefinition, 'name', isString);
  validate(attributeDefinition, 'meta', isOptionalObject);
}
