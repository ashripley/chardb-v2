import { Card as BaseCard, CardProps } from '@mantine/core';

interface Props extends CardProps {}

export function Card(props: Props) {
  return <BaseCard {...props} />;
}
