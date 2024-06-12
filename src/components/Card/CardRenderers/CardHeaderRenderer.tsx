import { Flex, Paper, Text } from '@mantine/core';
import styled from 'styled-components';
import { upperCaseFirst } from '../../../helpers/upperCaseFirst';
import { pxToRem } from '../../../utils/responsiveSize';
import { createElement } from 'react';
import { Theme, theme } from '../../../theme/theme';
import { IconFlame } from '@tabler/icons-react';
import { CardRenderer } from '../cardRenderer';

const Container = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
`;

const StyledText = styled(Text)`
  color: white;
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

export const CardHeaderRenderer: CardRenderer = (props) => {
  const { name, type } = props.cardDefinition.pokemonData;
  return (
    <Container>
      <StyledText>{upperCaseFirst(name)}</StyledText>
      <StyledPaper>
        <ImageContainer>
          {type ? (
            createElement(theme.icons[type as keyof Theme['icons']], {
              style: { width: pxToRem('md'), height: pxToRem('sm') },
              stroke: 1.5,
              color: theme.colors.types[type as keyof Theme['colors']['types']],
            })
          ) : (
            <IconFlame
              style={{ width: pxToRem('sm'), height: pxToRem('sm') }}
              stroke={1.5}
              color='var(--mantine-color-white)'
              fill={theme.colors.types[type as keyof Theme['colors']['types']]}
            />
          )}
        </ImageContainer>
      </StyledPaper>
    </Container>
  );
};
