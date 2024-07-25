import { Grid } from '@mantine/core';
import { TempCardRenderer } from './cardRenderer';
import styled from 'styled-components';
import { validateTempCardDefinition } from '../../api/card';
import {
  TempCardBodyRenderer,
  TempCardFooterRenderer,
  TempCardHeaderRenderer,
  TempCardImageRenderer,
  TempCardShell,
} from './TempCardRenderers';

const Column = styled(Grid.Col)``;

export const TempDisplayCard: TempCardRenderer = (props) => {
  validateTempCardDefinition(props.card);

  const { type } = props.card.pokemonData;

  return (
    <TempCardShell type={type}>
      <Grid>
        <Column span={12}>
          <TempCardHeaderRenderer {...props} />
        </Column>
        <Column span={12}>
          <TempCardImageRenderer {...props} />
        </Column>
        <Column span={12}>
          <TempCardBodyRenderer {...props} />
        </Column>
        <Column span={12}>
          <TempCardFooterRenderer {...props} />
        </Column>
      </Grid>
    </TempCardShell>
  );
};
