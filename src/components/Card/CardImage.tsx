import { ActionIcon, Card, Flex } from '@mantine/core';
import { IconChartBubble } from '@tabler/icons-react';
import { useState } from 'react';
import { theme } from '../../theme/theme';
import { CardImageRenderer } from './cardRenderer';
import styled from 'styled-components';
import { pxToRem } from '../../utils/responsiveSize';
import { EvolutionDefinition } from './CardDefinition';

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
  border-radius: ${pxToRem('lg')};
  top: ${pxToRem('xxs')};
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

export const CardImage: CardImageRenderer = (props) => {
  const { evolutions, imageUrl } = props;
  const [isEvolutions, setIsEvolutions] = useState<boolean>(false);

  return (
    <Container>
      <Wrapper>
        <StyledCard>
          {isEvolutions ? (
            <CardContainer>
              {Object.entries(evolutions).map(
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
            <Image src={imageUrl} />
          )}
        </StyledCard>
        <BubbleContainer>
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
        </BubbleContainer>
      </Wrapper>
    </Container>
  );
};
