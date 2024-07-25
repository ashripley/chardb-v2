import { Validator, isObject, normaliseValidator } from './index';

class ValidationError extends Error {}

export function validate<T, K extends keyof T>(
  object: T,
  key: K,
  check: Validator<T[K]>
) {
  try {
    if (!isObject(object)) {
      throw new Error();
    }
  } catch {
    throw new ValidationError(
      `Type of object was unexpected: ${typeof object}`
    );
  }

  try {
    if (normaliseValidator(check)(object[key]) === false) {
      throw new Error();
    }
  } catch {
    throw new ValidationError(
      `type of ${String(key)} was unexpected: ${typeof object[key]}`
    );
  }
}

export function validateObject<T>(object: Text, check: Validator<T>) {
  try {
    if (!isObject(object) || normaliseValidator(check)(object) === false) {
      throw new Error();
    }
  } catch {
    throw new ValidationError(
      `Type of object was unexpected: ${typeof object}`
    );
  }
}
