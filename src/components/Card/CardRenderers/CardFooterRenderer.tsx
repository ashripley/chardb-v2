import { CardRenderer } from '../cardRenderer';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../redux/store';
import { validateSetAttributeDefinition } from '../../Form/FormRenderers/Set/SetFormDefinition';
import { pxToRem } from '../../../utils';

const Container = styled(Flex)`
  margin: auto;
  width: 100%;
  justify-content: space-between;
  padding: ${pxToRem('xs')};
  align-items: center;
`;

const StyledText = styled(Text)`
  color: white;
  width: 100%;
  font-size: ${pxToRem('xs')};
`;

export const CardFooterRenderer: CardRenderer = (props) => {
  const {
    pokemonData: { id },
    attributes: { set },
    setNumber,
  } = props.card;
  const { attributes } = useSelector((state: RootStore) => state.root);

  const currentSet = attributes.find((att) => att.name === set);

  if (currentSet) {
    validateSetAttributeDefinition(currentSet);
  }

  return (
    <Container>
      <StyledText>#{id || ''}</StyledText>
      <StyledText>{currentSet?.meta?.year || ''}</StyledText>
      <Flex align='center'>
        <Text fz={pxToRem('xs')} c='white'>
          {setNumber || ''}
        </Text>
        <Text fz={pxToRem('xs')} c='white'>
          {setNumber && '/' + currentSet?.meta?.totalCards}
        </Text>
      </Flex>
    </Container>
  );
};
