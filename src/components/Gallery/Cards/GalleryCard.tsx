import {
  ActionIcon,
  Card as MantineCard,
  Flex,
  Grid,
  Group,
  Paper,
  Space,
  Text,
} from '@mantine/core';
import { IconFlame } from '@tabler/icons-react';
import { IconChartBubble } from '@tabler/icons-react';
import { Theme, theme } from '../../../theme/theme';
import { upperCaseFirst } from '../../../helpers/upperCaseFirst';
import { createElement, useState } from 'react';
import { StudioStore } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { Card as CardType } from '../../../redux/card';

interface Props {
  card: CardType;
}

export const GalleryCard = ({ card }: Props) => {
  const [isEvolutions, setIsEvolutions] = useState<boolean>(false);

  const {
    name,
    type,
    image,
    set,
    setNumber,
    cardType,
    condition,
    quantity,
    isGraded,
    grading,
    id,
    year,
  } = card;

  const { attributes } = useSelector((state: StudioStore) => state.studio);

  // card shell should take children
  // card header
  // card image
  // card body
  // card footer

  return (
    <MantineCard
      miw={350}
      mih={450}
      maw={350}
      radius='xl'
      bg={
        theme.colours.types[type as keyof Theme['colours']['types']] ??
        theme.colours.bg.bgGray100
      }
    >
      <Grid w={'100%'}>
        <Grid.Col span={12}>
          <Flex justify='space-between' align='center' w='90%' m='auto'>
            <Text c='white'>{upperCaseFirst(name)}</Text>
            <Paper h={30} w={30} bg='var(--mantine-color-white)' radius={'xl'}>
              <Flex justify='center' align='center' h={'100%'} w={'100%'}>
                {type ? (
                  createElement(
                    theme.icons[type as keyof Theme['colours']['types']],
                    {
                      style: { width: 20, height: 20 },
                      stroke: 1.5,
                      color:
                        theme.colours.types[
                          type as keyof Theme['colours']['types']
                        ],
                    }
                  )
                ) : (
                  <IconFlame
                    style={{ width: 25, height: 25 }}
                    stroke={1.5}
                    color='var(--mantine-color-white)'
                    fill={
                      theme.colours.types[
                        type as keyof Theme['colours']['types']
                      ]
                    }
                  />
                )}
              </Flex>
            </Paper>
          </Flex>
        </Grid.Col>
        <Grid.Col span={12}>
          <MantineCard w='90%' h={180} radius='lg' m='auto' p={'sm'}>
            <Flex direction='column' h='100%' justify={'center'}>
              <MantineCard
                h='90%'
                radius='lg'
                top={5}
                style={{ alignItems: 'center', justifyContent: 'center' }}
              >
                {isEvolutions ? (
                  <Flex
                    direction={'row'}
                    h={'100%'}
                    w={'100%'}
                    justify={'center'}
                    align={'center'}
                  >
                    {Object.keys(card.evolutions)
                      .sort()
                      .map((evo: string) => {
                        const evolution =
                          card.evolutions[evo as keyof CardType['evolutions']];
                        return (
                          evolution?.image !== '' && (
                            <img
                              src={evolution?.image}
                              width={85}
                              height={85}
                            />
                          )
                        );
                      })}
                  </Flex>
                ) : (
                  <img src={image} width={135} height={135} />
                )}
              </MantineCard>
              <Flex h='10%' w='100%' justify={'flex-end'} align={'center'}>
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
                    color={theme.colours.bg.bgGray100}
                  />
                </ActionIcon>
              </Flex>
            </Flex>
          </MantineCard>
        </Grid.Col>
        <Grid.Col span={12}>
          <Group w='100%' m='auto' p={15} gap={5}>
            <Text c='white' w='100%' mih={25}>
              Type: {upperCaseFirst(type)}
            </Text>
            <Text c='white' w='100%' mih={25}>
              Set: {set}
            </Text>
            <Text c='white' w='100%' mih={25}>
              Card Type: {cardType}
            </Text>
            <Text c='white' w='100%' mih={25}>
              Condition: {condition}
            </Text>
            <Text c='white' w='100%' mih={25}>
              Quantity: {quantity}
            </Text>
            {isGraded ? (
              <Text c='white' w='100%' mih={25}>
                Grading: {grading}
              </Text>
            ) : (
              <Space h={25} />
            )}
          </Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <Flex m='auto' w='100%' justify='space-between' p={15} align='center'>
            <Text c='white' w='100%'>
              #{id}
            </Text>
            <Text c='white' w='100%'>
              {year}
            </Text>
            <Flex align='center'>
              <Text c='white'>{setNumber}</Text>
              <Text c='white'>
                {setNumber &&
                  '/' +
                    attributes['set']?.filter((att: Record<string, any>) => {
                      return att.name === set;
                    })?.[0]?.totalCards}
              </Text>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
    </MantineCard>
  );
};
