import { Flex, Paper, Text } from '@mantine/core';
import styled from 'styled-components';
import { upperCaseFirst } from '../../../helpers/upperCaseFirst';
import { pxToRem } from '../../../utils/responsiveSize';
import { createElement } from 'react';
import { theme } from '../../../theme/theme';
import { IconFlame } from '@tabler/icons-react';
import { TempCardRenderer } from '../cardRenderer';

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
  height: ${pxToRem('md')};
  width: ${pxToRem('md')};
  background-color: var(--mantine-color-white);
  border-radius: ${pxToRem('md')};
`;

const ImageContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const TempCardHeaderRenderer: TempCardRenderer = (props) => {
  const { name, type } = props.card.pokemonData;
  return (
    <Container>
      <StyledText>{upperCaseFirst(name) || ''}</StyledText>
      <StyledPaper>
        <ImageContainer>
          {type ? (
            createElement(theme.icons[type], {
              style: { width: pxToRem('sm'), height: pxToRem('sm') },
              stroke: 1.5,
              color: theme.colors.types[type],
            })
          ) : (
            <IconFlame
              style={{ width: pxToRem('sm'), height: pxToRem('sm') }}
              stroke={1.5}
              color='var(--mantine-color-white)'
              fill={theme.colors.types[type] || theme.colors.bg.bgGray100}
            />
          )}
        </ImageContainer>
      </StyledPaper>
    </Container>
  );
};
