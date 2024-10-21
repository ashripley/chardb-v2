import { CardRenderer } from './cardRenderer';
import { validateCardDefinition } from '../../api/card';
import styled from 'styled-components';
import {
  CardBodyRenderer,
  CardFooterRenderer,
  CardHeaderRenderer,
  CardImageRenderer,
  CardShell,
} from './CardRenderers';

const Column = styled(Grid.Col)``;

export const DisplayCard: CardRenderer = (props) => {
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
