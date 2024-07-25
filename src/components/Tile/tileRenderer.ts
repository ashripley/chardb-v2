import { PropsWithChildren } from 'react';
import { CardDefinition } from '../../api/card';
import { TypesDefinition } from '../../styles/theme/colors';

interface TileRendererOptions {
  card: CardDefinition;
}

interface TileShellRendererOptions {
  type: keyof TypesDefinition;
}

export type TileRenderer = (props: TileRendererOptions) => JSX.Element;
export type TileShellRenderer = (
  props: PropsWithChildren<TileShellRendererOptions>
) => JSX.Element;
