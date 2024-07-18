import { Checkbox as BaseCheckbox } from '@mantine/core';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof BaseCheckbox> {}

export function Checkbox(props: Props) {
  return <BaseCheckbox {...props} />;
}
