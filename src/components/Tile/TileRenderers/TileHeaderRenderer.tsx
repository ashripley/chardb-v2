import { Flex, Paper, Text } from '@mantine/core';
import { createElement } from 'react';
import { theme } from '../../../styles/theme';
import { TileRenderer } from '../tileRenderer';
import styled from 'styled-components';
import { pxToRem, upperCaseFirst } from '../../../utils';
import icons from '../../../assets/icons/icons';

const Container = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
`;

const StyledText = styled(Text)`
  color: white;
  font-size: ${pxToRem('xs')};
`;

const StyledPaper = styled(Paper)`
  height: ${pxToRem('sm')};
  width: ${pxToRem('sm')};
  background-color: var(--mantine-color-white);
  border-radius: ${pxToRem('md')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TileHeaderRenderer: TileRenderer = (props) => {
  const { name, type } = props.card.pokemonData;

  return (
    <Container>
      <StyledText>{upperCaseFirst(name)}</StyledText>
      <StyledPaper>
        {type ? (
          createElement(icons[type], {
            style: { width: 15, height: 15 },
            stroke: 1.5,
            color: theme.colors.types[type],
          })
        ) : (
          <icons.fire
            style={{ width: 15, height: 15 }}
            stroke={1.5}
            color='var(--mantine-color-white)'
            fill={theme.colors.types[type]}
          />
        )}
      </StyledPaper>
    </Container>
  );
};
