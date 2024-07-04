import { Flex, Paper, Text } from '@mantine/core';
import { upperCaseFirst } from '../../../helpers/upperCaseFirst';
import { createElement } from 'react';
import { theme } from '../../../theme/theme';
import { IconFlame } from '@tabler/icons-react';
import { TileRenderer } from '../tileRenderer';
import styled from 'styled-components';
import { pxToRem } from '../../../utils';

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
          createElement(theme.icons[type], {
            style: { width: 15, height: 15 },
            stroke: 1.5,
            color: theme.colors.types[type],
          })
        ) : (
          <IconFlame
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
