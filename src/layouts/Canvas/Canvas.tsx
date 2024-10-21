import { theme } from '../../styles/theme';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../utils';

const StyledFlex = styled(Flex)`
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export function Canvas(props: PropsWithChildren) {
  const { children } = props;

  return (
    <StyledFlex>
      <Paper
        radius={pxToRem('sm')}
        p='lg'
        m='auto'
        w='100%'
        h={'100%'}
        bg={theme.colors.bg.bgGray25}
      >
        <Flex w={'100%'} h='100%' align={'center'} direction={'column'}>
          {children}
        </Flex>
      </Paper>
    </StyledFlex>
  );
}
