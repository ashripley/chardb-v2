import { Flex, Paper, Text } from '@mantine/core';
import styled from 'styled-components';
import { upperCaseFirst } from '../../helpers/upperCaseFirst';
import { pxToRem } from '../../utils/responsiveSize';
import { ReactNode, createElement } from 'react';
import { Theme, theme } from '../../theme/theme';
import { IconFlame } from '@tabler/icons-react';

interface Props {
  name: string;
  type: string;
}

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
  height: ${pxToRem(30)};
  width: ${pxToRem(30)}; 
  background-color: var(--mantine-color-white}; 
  border-radius: ${pxToRem(35)};
`;

const ImageContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const CardHeader: (props: Props) => ReactNode = (props) => {
  const { name, type } = props;
  return (
    <Container>
      <StyledText>{upperCaseFirst(name)}</StyledText>
      <StyledPaper>
        <ImageContainer>
          {type ? (
            createElement(theme.icons[type as keyof Theme['icons']], {
              style: { width: 20, height: 20 },
              stroke: 1.5,
              color: theme.colors.types[type as keyof Theme['colors']['types']],
            })
          ) : (
            <IconFlame
              style={{ width: 25, height: 25 }}
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
