import {
  NumberInput as BaseNumberInput,
  NumberInputProps,
} from '@mantine/core';
import { NumberInputStyles } from '.';

interface Props extends NumberInputProps {}

export function NumberInput(props: Props) {
  return (
    <BaseNumberInput
      {...props}
      classNames={{ input: NumberInputStyles.input }}
    />
  );
}
