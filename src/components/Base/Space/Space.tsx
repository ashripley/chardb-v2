import { Space as BaseSpace } from '@mantine/core';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof BaseSpace> {}

export function Space(props: Props) {
  return <BaseSpace {...props} />;
}
