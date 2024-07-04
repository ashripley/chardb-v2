import { Grid } from '@mantine/core';
import { validateCardDefinition } from '../../api/card';
import styled from 'styled-components';
import { TileRenderer } from './tileRenderer';
import {
  TileCarousel,
  TileFooterRenderer,
  TileHeaderRenderer,
  TileShell,
} from './TileRenderers';

const Column = styled(Grid.Col)`
  height: 20%;
`;

const StyledGrid = styled(Grid)`
  .mantine-Grid-inner {
    height: 100%;
  }
`;

export const Tile: TileRenderer = (props) => {
  validateCardDefinition(props.card);

  const { type } = props.card.pokemonData;

  return (
    <TileShell type={type}>
      <StyledGrid w={'100%'} h={'100%'}>
        <Column span={12}>
          <TileHeaderRenderer {...props} />
        </Column>
        <TileCarousel {...props} />
        <Column span={12}>
          <TileFooterRenderer {...props} />
        </Column>
      </StyledGrid>
    </TileShell>
  );
};
