import { Paper as BasePaper, PaperProps } from '@mantine/core';
import { PropsWithChildren } from 'react';

interface Props extends PaperProps {}

export function Paper(props: PropsWithChildren<Props>) {
  return <BasePaper {...props} />;
}
