import { AttributeDefinition } from '../../../../api/attribute';
import { validate } from '../../../../helpers/validate';
import {
  combineValidators,
  isNumber,
  isObject,
  isOptional,
} from '../../../../helpers/validators';

export interface SetAttributeDefinition extends AttributeDefinition {
  type: 'set';
  meta: {
    totalCards?: number;
    year?: number;
  };
}

const isOptionalObject = combineValidators(isOptional, isObject);
const isOptionalNumber = combineValidators(isOptional, isNumber);

const isSetFormType = (type: unknown): type is 'set' => {
  return type === 'set';
};

export function validateSetAttributeDefinition(
  attributeDefinition: Partial<AttributeDefinition>
): asserts attributeDefinition is SetAttributeDefinition {
  const setAttributeDefinition = attributeDefinition as SetAttributeDefinition;

  validate(setAttributeDefinition, 'type', isSetFormType);
  validate(setAttributeDefinition, 'meta', isOptionalObject);

  if (!setAttributeDefinition.meta) return;

  validate(setAttributeDefinition.meta, 'totalCards', isOptionalNumber);
  validate(setAttributeDefinition.meta, 'year', isOptionalNumber);
}
