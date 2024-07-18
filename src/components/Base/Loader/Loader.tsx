import { Loader as BaseLoader } from '@mantine/core';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof BaseLoader> {}

export function Loader(props: Props) {
  return <BaseLoader {...props} />;
}
