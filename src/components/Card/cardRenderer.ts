import { ReactNode } from 'react';
import { CardDefinition } from './CardDefinition';
import { Theme } from '../../theme/theme';

interface CardRendererOptions {
  cardDefinition: CardDefinition;
}

interface CardShellRendererOptions {
  type: Theme['colours']['types'];
  children: ReactNode;
}

export type CardRenderer = (props: CardRendererOptions) => ReactNode;
export type CardShellRenderer = (props: CardShellRendererOptions) => ReactNode;
