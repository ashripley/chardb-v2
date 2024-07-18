import { Container as BaseContainer } from '@mantine/core';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof BaseContainer> {}

export function Container(props: Props) {
  const { h, w, m, children } = props;
  return <BaseContainer children={children} h={h} w={w} m={m} />;
}
