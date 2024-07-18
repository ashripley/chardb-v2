import { ScrollArea as BaseScrollArea } from '@mantine/core';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof BaseScrollArea> {}

export function ScrollArea(props: Props) {
  return <BaseScrollArea {...props} />;
}
