import { CardFooterRenderer } from './cardRenderer';
import { Flex, Text } from '@mantine/core';
import styled from 'styled-components';
import { pxToRem } from '../../utils/responsiveSize';
import { useSelector } from 'react-redux';
import { StudioStore } from '../../redux/store';

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
`;

export const CardFooter: CardFooterRenderer = (props) => {
  const { id, set, setNumber, year } = props;
  const { attributes } = useSelector((state: StudioStore) => state.studio);

  return (
    <Container>
      <StyledText>#{id}</StyledText>
      <StyledText>{year}</StyledText>
      <Flex align='center'>
        <Text c='white'>{setNumber}</Text>
        <Text c='white'>
          {setNumber &&
            '/' +
              attributes['set']?.filter((att: Record<string, any>) => {
                return att.name === set.name;
              })?.[0]?.totalCards}
        </Text>
      </Flex>
    </Container>
  );
};
