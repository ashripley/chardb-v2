import { Rating as BaseRating } from '@mantine/core';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof BaseRating> {}

export function Rating(props: Props) {
  return <BaseRating {...props} />;
}
