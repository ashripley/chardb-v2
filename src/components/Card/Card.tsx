import { Grid } from '@mantine/core';
import { CardRenderer } from './cardRenderer';
import { CardHeaderRenderer } from './CardRenderers/CardHeaderRenderer';
import { CardImageRenderer } from './CardRenderers/CardImageRenderer';
import { CardBodyRenderer } from './CardRenderers/CardBodyRenderer';
import { CardFooterRenderer } from './CardRenderers/CardFooterRenderer';
import { validateCardDefinition } from '../../api/card';
import styled from 'styled-components';
import { CardShell } from './CardRenderers';

const Column = styled(Grid.Col)``;

export const Card: CardRenderer = (props) => {
  validateCardDefinition(props.card);

  const { type } = props.card.pokemonData;

  return (
    <CardShell type={type}>
      <Grid>
        <Column span={12}>
          <CardHeaderRenderer {...props} />
        </Column>
        <Column span={12}>
          <CardImageRenderer {...props} />
        </Column>
        <Column span={12}>
          <CardBodyRenderer {...props} />
        </Column>
        <Column span={12}>
          <CardFooterRenderer {...props} />
        </Column>
      </Grid>
    </CardShell>
  );
};
