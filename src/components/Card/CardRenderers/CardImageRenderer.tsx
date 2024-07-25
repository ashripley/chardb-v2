import { ActionIcon, Card, Flex } from '@mantine/core';
import { IconChartBubble } from '@tabler/icons-react';
import { useState } from 'react';
import { theme } from '../../../styles/theme';
import { CardRenderer } from '../cardRenderer';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/responsiveSize';
import { EvolutionDefinition } from '../../../api/pokemon';

const Container = styled(Card)`
  width: 90%;
  height: 180px;
  border-radius: ${pxToRem('xs')};
  margin: auto;
  padding: ${pxToRem('xs')};
`;

const Wrapper = styled(Flex)`
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  height: 90%;
  border-radius: ${pxToRem('sm')};
  top: ${pxToRem('xxxs')};
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(Flex)`
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const EvolutionImage = styled.img`
  width: 85px;
  height: 85px;
`;

const Image = styled.img`
  width: 135px;
  height: 135px;
`;

const BubbleContainer = styled(Flex)`
  height: 10%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const CardImageRenderer: CardRenderer = (props) => {
  const { evolutions: evolutionChain, imageUrl } = props.card.pokemonData;
  const [isEvolutions, setIsEvolutions] = useState<boolean>(false);

  return (
    <Container>
      <Wrapper>
        <StyledCard>
          {isEvolutions ? (
            <CardContainer>
              {Object.entries(evolutionChain).map(
                ([key, evolution]: [string, EvolutionDefinition]) => {
                  return (
                    evolution?.imageUrl !== '' && (
                      <EvolutionImage key={key} src={evolution.imageUrl} />
                    )
                  );
                }
              )}
            </CardContainer>
          ) : (
            <Image src={imageUrl || ''} />
          )}
        </StyledCard>
        <BubbleContainer>
          {evolutionChain?.second?.name && (
            <ActionIcon
              variant='transparent'
              color='gray'
              size='sm'
              aria-label='evolutions'
              onClick={() => setIsEvolutions(!isEvolutions)}
            >
              <IconChartBubble
                height={25}
                width={25}
                stroke={1}
                color={theme.colors.bg.bgGray100}
              />
            </ActionIcon>
          )}
        </BubbleContainer>
      </Wrapper>
    </Container>
  );
};
