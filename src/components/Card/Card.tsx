import { validateCardDefinition } from './CardDefinition';
import { CardRenderer } from './cardRenderer';

export const Card: CardRenderer = (props) => {
  validateCardDefinition(props.cardDefinition);

  const { cardId } = props.cardDefinition;

  return <div>{cardId}</div>;
};
