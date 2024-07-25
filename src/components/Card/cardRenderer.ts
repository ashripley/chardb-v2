import { PropsWithChildren } from 'react';
import { CardDefinition } from '../../api/card';
import { Types } from '../../theme/theme';
import { TempCardDefinition } from '../../api/card/cardDefinition';

interface CardRendererOptions {
  card: CardDefinition;
}

interface TempCardRendererOptions {
  card: TempCardDefinition;
}

interface CardShellRendererOptions {
  type: keyof Types;
}

interface TempCardShellRendererOptions {
  type?: keyof Types;
}

export type CardRenderer = (props: CardRendererOptions) => JSX.Element;
export type TempCardRenderer = (props: TempCardRendererOptions) => JSX.Element;
export type CardShellRenderer = (
  props: PropsWithChildren<CardShellRendererOptions>
) => JSX.Element;
export type TempCardShellRenderer = (
  props: PropsWithChildren<TempCardShellRendererOptions>
) => JSX.Element;
