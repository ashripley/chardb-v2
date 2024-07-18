import { Button as BaseButton, ButtonProps } from '@mantine/core';
import { ComponentProps } from 'react';

interface Props extends ButtonProps {
  onClick?: ComponentProps<typeof BaseButton>;
}

export function Button(props: Props) {
  return <BaseButton {...props} onClick={() => props.onClick} />;
}
