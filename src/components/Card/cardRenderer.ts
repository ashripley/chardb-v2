import { PropsWithChildren, ReactNode } from 'react';
import { CardDefinition } from '../../api/card';
import { Types } from '../../theme/theme';

interface CardRendererOptions {
  card: CardDefinition;
}

interface CardShellRendererOptions {
  type: keyof Types;
}

export type CardRenderer = (props: CardRendererOptions) => JSX.Element;
export type CardShellRenderer = (
  props: PropsWithChildren<CardShellRendererOptions>
) => ReactNode;
