import { CardRenderer } from '../cardRenderer';
import styled from 'styled-components';
import { pxToRem, upperCaseFirst } from '../../../utils';

const StyledGroup = styled(Group)`
  width: 100%;
  margin: auto;
  padding: ${pxToRem('xs')};
  gap: ${pxToRem('xxxs')};
`;

const StyledText = styled(Text)`
  color: white;
  width: 100%;
  min-height: ${pxToRem('sm')};
  font-size: ${pxToRem('xs')};
`;

export const CardBodyRenderer: CardRenderer = (props) => {
  const {
    quantity,
    pokemonData: { type },
  } = props.card;
  const { set, cardType, condition, isGraded, grading } = props.card.attributes;

  return (
    <StyledGroup>
      <StyledText>Type: {upperCaseFirst(type) || ''}</StyledText>
      <StyledText>Set: {set || ''}</StyledText>
      <StyledText>Card Type: {cardType || ''}</StyledText>
      <StyledText>Condition: {condition || ''}</StyledText>
      <StyledText>Quantity: {quantity || ''}</StyledText>
      {isGraded && grading ? (
        <StyledText>Grading: {grading || ''}</StyledText>
      ) : (
        <Space h={25} />
      )}
    </StyledGroup>
  );
};
