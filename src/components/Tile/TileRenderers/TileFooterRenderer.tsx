import { Flex, Text } from '@mantine/core';
import { TileRenderer } from '../tileRenderer';
import styled from 'styled-components';
import { pxToRem } from '../../../utils';
import { RootStore } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { validateSetAttributeDefinition } from '../../Form/FormRenderers/Set/SetFormDefinition';

const Container = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  flex-direction: row;
`;

const StyledText = styled(Text)`
  color: white;
  width: 100%;
  font-size: ${pxToRem('font')};
`;

export const TileFooterRenderer: TileRenderer = (props) => {
  const { attributes } = useSelector((state: RootStore) => state.root);

  const {
    pokemonData: { id },
    attributes: { set },
    setNumber,
  } = props.card;

  const currentSet = attributes.find((att) => att.name === set);

  if (currentSet) {
    validateSetAttributeDefinition(currentSet);
  }

  return (
    <Container>
      <StyledText>#{id}</StyledText>
      <StyledText>{currentSet?.meta.year}</StyledText>
      <Flex align='center'>
        <Text c='white' fz={pxToRem('font')}>
          {setNumber}
        </Text>
        <Text c='white' fz={pxToRem('font')}>
          /84
        </Text>
      </Flex>
    </Container>
  );
};
