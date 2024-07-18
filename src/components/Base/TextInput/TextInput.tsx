import { TextInput as BaseTextInput } from '@mantine/core';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof BaseTextInput> {}

export function TextInput(props: Props) {
  return <BaseTextInput {...props} />;
}
