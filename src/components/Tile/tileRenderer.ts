import { PropsWithChildren, ReactNode } from 'react';
import { CardDefinition } from '../../api/card';
import { Types } from '../../theme/theme';

interface TileRendererOptions {
  card: CardDefinition;
}

interface TileShellRendererOptions {
  type: keyof Types;
}

export type TileRenderer = (props: TileRendererOptions) => JSX.Element;
export type TileShellRenderer = (
  props: PropsWithChildren<TileShellRendererOptions>
) => ReactNode;
