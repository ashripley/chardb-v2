import { PropsWithChildren } from 'react';
import { CardDefinition, TempCardDefinition } from '../../api/card';
import { TypesDefinition } from '../../styles/theme/colors';

interface CardRendererOptions {
  card: CardDefinition;
}

interface TempCardRendererOptions {
  card: TempCardDefinition;
}

interface CardShellRendererOptions {
  type: keyof TypesDefinition;
}

interface TempCardShellRendererOptions {
  type?: keyof TypesDefinition;
}

export type CardRenderer = (props: CardRendererOptions) => JSX.Element;
export type TempCardRenderer = (props: TempCardRendererOptions) => JSX.Element;
export type CardShellRenderer = (
  props: PropsWithChildren<CardShellRendererOptions>
) => JSX.Element;
export type TempCardShellRenderer = (
  props: PropsWithChildren<TempCardShellRendererOptions>
) => JSX.Element;
