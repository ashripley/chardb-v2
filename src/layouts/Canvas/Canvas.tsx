import { Flex, Paper } from '@mantine/core';
import { theme } from '../../theme/theme';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledFlex = styled(Flex)`
  flex-direction: column;
  height: 100%;
  width: 90%;
  align-items: center;
`;

export function Canvas(props: PropsWithChildren) {
  const { children } = props;

  return (
    <StyledFlex>
      <Paper
        radius='xl'
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
