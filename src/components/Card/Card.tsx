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

  const { type, name, evolutionChain, imageUrl, id } =
    props.cardDefinition.pokemonData;

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
            {...props.cardDefinition.attributes}
            isGraded={props.cardDefinition.attributes.isGraded}
            quantity={props.cardDefinition.quantity}
            type={props.cardDefinition.pokemonData.type}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <CardFooter
            id={id}
            set={props.cardDefinition.attributes.set}
            setNumber={props.cardDefinition.setNumber}
            year={props.cardDefinition.attributes.set.year}
          />
        </Grid.Col>
      </Grid>
    </CardShell>
  );
};
