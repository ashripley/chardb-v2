import { Grid } from '@mantine/core';
import { validateCardDefinition } from './CardDefinition';
import { CardShell } from './CardShell';
import { CardRenderer } from './cardRenderer';
import { CardHeader } from './CardHeader';
import { CardImage } from './CardImage';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

export const Card: CardRenderer = (props) => {
  validateCardDefinition(props.cardDefinition);

  const { attributes, pokemonData, quantity, setNumber } = props.cardDefinition;
  const { type, name, evolutionChain, imageUrl, id } = pokemonData;

  return (
    <CardShell type={type}>
      <Grid>
        <Grid.Col span={12}>
          <CardHeader type={type} name={name} />
        </Grid.Col>
        <Grid.Col span={12}>
          <CardImage evolutions={evolutionChain} imageUrl={imageUrl} />
        </Grid.Col>
        <Grid.Col span={12}>
          <CardBody
            {...attributes}
            isGraded={attributes.isGraded}
            quantity={quantity}
            type={pokemonData.type}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <CardFooter id={id} set={attributes.set} setNumber={setNumber} />
        </Grid.Col>
      </Grid>
    </CardShell>
  );
};
