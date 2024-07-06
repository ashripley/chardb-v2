import { Flex, Paper } from '@mantine/core';
import { theme } from '../../theme/theme';
import { PropsWithChildren } from 'react';

export function Canvas(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Flex direction={'column'} h={'100%'} w={'90%'} align={'center'}>
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
    </Flex>
  );
}
