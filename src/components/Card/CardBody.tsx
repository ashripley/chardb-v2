import { Group, Text, Space } from '@mantine/core';
import { upperCaseFirst } from '../../helpers/upperCaseFirst';
import { CardBodyRenderer } from './cardRenderer';
import styled from 'styled-components';
import { pxToRem } from '../../utils/responsiveSize';

const StyledGroup = styled(Group)`
  width: 100%;
  margin: auto;
  padding: ${pxToRem('xs')};
  gap: ${pxToRem('xxs')};
`;

const StyledText = styled(Text)`
  color: white;
  width: 100%;
  min-height: ${pxToRem('sm')};
`;

export const CardBody: CardBodyRenderer = (props) => {
  const { type, set, cardType, condition, quantity, isGraded, grading } = props;

  return (
    <StyledGroup>
      <StyledText>Type: {upperCaseFirst(type)}</StyledText>
      <StyledText>Set: {set.name}</StyledText>
      <StyledText>Card Type: {cardType}</StyledText>
      <StyledText>Condition: {condition}</StyledText>
      <StyledText>Quantity: {quantity}</StyledText>
      {isGraded ? (
        <StyledText>Grading: {grading}</StyledText>
      ) : (
        <Space h={25} />
      )}
    </StyledGroup>
  );
};
