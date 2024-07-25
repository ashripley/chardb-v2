import { Button as BaseButton, ButtonProps } from '@mantine/core';

interface Props extends ButtonProps {
  onClick?: () => void;
}

export function Button(props: Props) {
  return <BaseButton {...props} />;
}
