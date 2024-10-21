import styled from 'styled-components';
import { TileRenderer } from '../tileRenderer';
import { theme } from '../../../styles/theme';
import { upperCaseFirst, pxToRem } from '../../../utils';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../redux/store';
import { validateSetAttributeDefinition } from '../../Form/FormRenderers/Set/SetFormDefinition';
// import { CarouselStyles } from '../../Base/Carousel';
import icons from '../../../assets/icons/icons';

const StyledCarousel = styled(Carousel)`
  height: 70%;
  width: 100%;

  & > {
    height: 100px !important;
  }
`;

const Column = styled(Grid.Col)``;

const MantineContainerCard = styled(Card)`
  height: 100%;
  width: 90%;
  border-radius: ${pxToRem('sm')};
  margin: auto;
  padding: ${pxToRem('xxs')};
`;

const MantineCard = styled(Card)`
  height: 100%;
  border-radius: ${pxToRem('xxl')};
  margin: auto;
  display: flex;
  justify-content: center;
`;

const FlexContainer = styled(Flex)`
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const StyledText = styled(Text)`
  color: white;
  width: 100%;
  min-height: ${pxToRem('xs')};
  font-size: ${pxToRem('font')};
  white-space: no-wrap;
  text-overflow: 'ellipsis';
  --webkit-line-clamp: 1;
`;

export const TileCarousel: TileRenderer = (props) => {
  const { attributes } = useSelector((state: RootStore) => state.root);

  const {
    pokemonData: { imageUrl, type },
    attributes: { set, cardType, condition, isGraded, grading },
    quantity,
  } = props.card;

  const currentSet = attributes.find((att) => att.name === set);

  if (currentSet) {
    validateSetAttributeDefinition(currentSet);
  }

  return (
    <StyledCarousel controlsOffset='xs'>
      <Carousel.Slide>
        <Column span={12} h={'85%'}>
          <MantineContainerCard>
            <FlexContainer>
              <MantineCard>
                {imageUrl ? (
                  <img src={imageUrl} width={75} height={75} />
                ) : (
                  <icons.fire
                    width={100}
                    height={100}
                    stroke={1}
                    color={theme.colors.bg.bgGray100}
                  />
                )}
              </MantineCard>
            </FlexContainer>
          </MantineContainerCard>
        </Column>
      </Carousel.Slide>
      <Carousel.Slide>
        <Column span={12}>
          <Group w='100%' m='auto' pl={8} gap={0}>
            <StyledText>Type: {upperCaseFirst(type)}</StyledText>
            <StyledText>Set: {set}</StyledText>
            <StyledText>Card Type: {cardType}</StyledText>
            <StyledText>Condition: {condition}</StyledText>
            <StyledText>Quantity: {quantity}</StyledText>
            {isGraded && <StyledText>Grading: {grading}</StyledText>}
          </Group>
        </Column>
      </Carousel.Slide>
    </StyledCarousel>
  );
};
