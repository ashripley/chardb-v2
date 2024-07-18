import { Fieldset as BaseFieldset } from '@mantine/core';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof BaseFieldset> {}

export function Fieldset(props: Props) {
  return <BaseFieldset {...props} />;
}
