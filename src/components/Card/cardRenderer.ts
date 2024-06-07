import { ReactNode } from 'react';
import { CardDefinition } from './CardDefinition';

interface CardRendererOptions {
  cardDefinition: CardDefinition;
}

export type CardRenderer = (props: CardRendererOptions) => ReactNode;
