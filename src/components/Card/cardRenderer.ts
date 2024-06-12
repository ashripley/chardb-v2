import { ReactNode } from 'react';
import { CardDefinition } from '../../api/card';
import { Types } from '../../theme/theme';

interface CardRendererOptions {
  cardDefinition: CardDefinition;
}

interface CardShellRendererOptions {
  type: keyof Types;
  children: ReactNode;
}

export type CardRenderer = (props: CardRendererOptions) => JSX.Element;
export type CardShellRenderer = (props: CardShellRendererOptions) => ReactNode;
