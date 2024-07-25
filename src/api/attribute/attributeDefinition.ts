import { validate } from '../../utils/validation';
import {
  combineValidators,
  isObject,
  isOptional,
  isString,
} from '../../utils/validation/validators';

export type Type = 'set' | 'cardType' | 'type' | 'condition' | 'rarity';

export interface AttributeDefinition {
  type: Type | string;
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
