import { Card, Flex, Paper, Space, Text } from '@mantine/core';
import { createElement } from 'react';
import { theme } from '../../styles/theme';
import { upperCaseFirst } from '../../utils/upperCaseFirst';
import { PokemonDefinition } from '../../api/pokemon';
import icons from '../../assets/icons';

interface Props {
  pokemon: PokemonDefinition;
}

export const CustomTile = ({ pokemon }: Props) => {
  return (
    <>
      <Card
        w={'200px'}
        h={'200px'}
        radius='xl'
        bg={theme.colors.types[pokemon.type]}
      >
        <Flex justify='space-between' align='center' w='90%' m='auto'>
          <Text c='white'>{upperCaseFirst(pokemon.name)}</Text>
          <Paper
            h={25}
            w={25}
            bg='var(--mantine-color-white)'
            radius={'xl'}
            display={'flex'}
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            {createElement(icons[pokemon.type], {
              style: { width: 15, height: 15 },
              stroke: 1.5,
              color: theme.colors.types[pokemon.type],
            })}
          </Paper>
        </Flex>
        <Space h={10} />
        <Card w='90%' h={'90%'} radius='lg' m='auto' p={'sm'}>
          <Flex direction='column' h={'100%'} justify={'center'}>
            <Card
              h='100%'
              radius='lg'
              m='auto'
              display={'flex'}
              style={{ justifyContent: 'center' }}
            >
              <img src={pokemon.imageUrl} width={75} height={75} />
            </Card>
          </Flex>
        </Card>
        <Space h={5} />
        <Flex
          justify='center'
          align='center'
          w='90%'
          m='auto'
          direction={'row'}
          c={'white'}
          fs={'0.8em'}
        >
          #{pokemon.id}
        </Flex>
      </Card>
    </>
  );
};
