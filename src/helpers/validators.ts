export type AssertionValidator<O> = (value: unknown) => asserts value is O;
export type TypeGuardValidator<O> = (value: unknown) => value is O;

export type Validator<O> = TypeGuardValidator<O> | AssertionValidator<O>;

export type ValidatorType<T extends Validator<unknown>> = T extends Validator<
  infer P
>
  ? P
  : never;

export function combineValidators<O>(
  ...validators: Validator<O>[]
): TypeGuardValidator<O> {
  return (value): value is O =>
    validators.some((validator) => normaliseValidator(validator)(value));
}

export function isArrayOf<T>(validator: Validator<T>): TypeGuardValidator<T[]> {
  return (value: unknown): value is Array<T> => {
    const normalisedValidator = normaliseValidator(validator);

    return isArray(value) && value.every(normalisedValidator);
  };
}

export function normaliseValidator<O>(
  validator: Validator<O>
): TypeGuardValidator<O> {
  return (value: unknown): value is O => {
    try {
      // A validator function can either be a typeguard or assertion function. Typeguards are valid when they return true,

      // assertion functions are valid when they do not throw but the return can be anything, and normally undefined.

      // For this reason, the return value is only meaningful if it's specifically false, as a typeguard.

      return validator(value) !== false;
    } catch {
      return false;
    }
  };
}

export function isOptional(value: unknown): value is undefined {
  return value == null;
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isArray<T>(value: unknown): value is Array<T> {
  return Array.isArray(value);
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function isObject<T extends object>(value: unknown): value is T {
  return typeof value === 'object' && value != null;
}
