import { Grid } from '@mantine/core';
import { validateCardDefinition } from './CardDefinition';
import { CardShell } from './CardShell';
import { CardRenderer } from './cardRenderer';
import { CardHeader } from './CardHeader';

export const Card: CardRenderer = (props) => {
  validateCardDefinition(props.cardDefinition);

  const { type } = props.cardDefinition.attributes;

  return (
    <CardShell type={type}>
      <Grid>
        <Grid.Col span={12}>
          <CardHeader
            type={props.cardDefinition.pokemonData.type}
            name={props.cardDefinition.pokemonData.name}
          />
        </Grid.Col>
        {/* <Grid.Col span={12}>
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
        <Grid.Col span={12}> */}
        {/* <Flex m='auto' w='100%' justify='space-between' p={15} align='center'>
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
        </Flex> */}
        {/* </Grid.Col> */}
      </Grid>
    </CardShell>
  );
};
