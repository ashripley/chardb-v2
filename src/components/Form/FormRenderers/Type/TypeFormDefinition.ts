import { AttributeDefinition } from '../../../../api/attribute';
import { validate } from '../../../../helpers/validate';
import {
  combineValidators,
  isObject,
  isOptional,
  isString,
} from '../../../../helpers/validators';

export interface TypeAttributeDefinition extends AttributeDefinition {
  type: 'type';
  meta: {
    color: string;
  };
}

const isOptionalObject = combineValidators(isOptional, isObject);

const isTypeFormType = (type: unknown): type is 'type' => {
  return type === 'type';
};

export function validateTypeAttributeDefinition(
  attributeDefinition: AttributeDefinition
): asserts attributeDefinition is TypeAttributeDefinition {
  const typeAttributeDefinition =
    attributeDefinition as TypeAttributeDefinition;
  validate(typeAttributeDefinition, 'type', isTypeFormType);
  validate(typeAttributeDefinition, 'meta', isOptionalObject);

  if (!typeAttributeDefinition.meta) return;

  validate(typeAttributeDefinition.meta, 'color', isString);
}
