import { validateCardDefinition } from './CardDefinition';
import { CardShell } from './CardShell';
import { CardRenderer } from './cardRenderer';

export const Card: CardRenderer = (props) => {
  validateCardDefinition(props.cardDefinition);

  return <CardShell></CardShell>;
};
