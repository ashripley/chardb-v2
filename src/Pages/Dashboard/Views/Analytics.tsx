import { Flex, Text, Group, Badge, Card } from '@mantine/core';
import { RootStore } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { AppType, isMobile } from '../../../config';
import { Image, Button } from '../../../components/Base';
import { pxToRem } from '../../../utils';
import { Link } from 'react-router-dom';
import { updateApp } from '../../../redux/root';
import { theme } from '../../../styles/theme';

export const Analytics = () => {
  const dispatch = useDispatch();
  const { attributes, pokemon, cards } = useSelector(
    (state: RootStore) => state.root
  );

  const currentSet = attributes.find((att) => att.name === 'set');

  function getAttributeMap() {
    let attributeMapCount: Record<string, number> = {};

    for (const attribute of attributes) {
      const count = attributes.filter(
        (att) => att.type === attribute.type
      ).length;
      attributeMapCount = { ...attributeMapCount, [attribute.type]: count };
    }

    return attributeMapCount;
  }

  const attributesToRender = getAttributeMap();

  const labelMap: Record<string, string> = {
    set: 'Sets',
    cardType: 'Card Types',
    type: 'Types',
    condition: 'Conditions',
    totalCards: 'Total Cards',
    colour: 'Colour',
    year: 'Year',
  };

  const onAppChange = (name: AppType) => {
    dispatch(updateApp(name));
  };

  return (
    <>
      <Flex
        h={'100%'}
        w={'100%'}
        align={'flex-start'}
        justify={'space-between'}
        gap={25}
        wrap={'wrap'}
      >
        <Card
          padding='lg'
          radius={pxToRem('xs')}
          withBorder
          miw={isMobile ? '' : 450}
          w={isMobile ? '100%' : '30%'}
        >
          <Card.Section>
            <Image
              src='https://github.com/giorgosioak/pokemon-wallpapers/blob/master/pokemon/venusaur.jpg?raw=true'
              h='auto'
            />
          </Card.Section>

          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Cards</Text>
            <Badge color={theme.colors.types.grass}>Gallery</Badge>
          </Group>

          <Flex direction={'column'} gap={5}>
            <Text fw={400} c='dimmed' size='sm'>
              Cards: {cards.length}
            </Text>
            <Text fw={400} c='dimmed' size='sm'>
              Graded Cards:{' '}
              {cards.filter((card) => !!card?.attributes.grading).length}
            </Text>
            {currentSet &&
              Object.values(currentSet).map((set: any) => (
                <Text fw={400} c='dimmed' size='sm'>
                  {set.name}:{' '}
                  {
                    cards.filter((card) => card.attributes.set === set.name)
                      .length
                  }
                  /{set.totalCards}
                </Text>
              ))}
          </Flex>

          <Link
            to={'/gallery'}
            onClick={() => onAppChange('Gallery')}
            style={{ textDecoration: 'none' }}
          >
            <Button color='blue' fullWidth mt='md' radius='md'>
              Gallery
            </Button>
          </Link>
        </Card>

        <Card
          padding='lg'
          radius={pxToRem('xs')}
          withBorder
          miw={isMobile ? '' : 450}
          w={isMobile ? '100%' : '30%'}
        >
          <Card.Section>
            <Image
              src='https://github.com/giorgosioak/pokemon-wallpapers/blob/master/pokemon/charizard.jpg?raw=true'
              h='auto'
            />
          </Card.Section>

          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Attributes</Text>
            <Badge color={theme.colors.types.fire}>Studio</Badge>
          </Group>

          <Flex direction={'column'}>
            {Object.entries(attributesToRender).map((att, index: number) => (
              <Text key={index} fw={400} c='dimmed' size='sm'>
                {labelMap[att[0]]}: {att[1]}
              </Text>
            ))}
            <Text fw={400} c='dimmed' size='sm'>
              Attributes: {Object.keys(attributes)?.length}
            </Text>
          </Flex>

          {isMobile ? (
            <Button color='blue' fullWidth mt='md' radius='md' disabled>
              Studio Only On Desktop
            </Button>
          ) : (
            <Link
              to={'/studio'}
              onClick={() => onAppChange('Studio')}
              style={{ textDecoration: 'none' }}
            >
              <Button color='blue' fullWidth mt='md' radius='md'>
                Studio
              </Button>
            </Link>
          )}
        </Card>

        <Card
          padding='lg'
          radius={pxToRem('xs')}
          withBorder
          miw={isMobile ? '' : 450}
          w={isMobile ? '100%' : '30%'}
        >
          <Card.Section>
            <Image
              src='https://github.com/giorgosioak/pokemon-wallpapers/blob/master/pokemon/blastoise.jpg?raw=true'
              h='auto'
            />
          </Card.Section>

          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Pokémon</Text>
            <Badge color={theme.colors.types.water}>Pokédex</Badge>
          </Group>

          <Text fw={400} c='dimmed' size='sm'>
            Pokémon: {Object.keys(pokemon).length}
          </Text>

          <Link
            to={'https://pokemondb.net/pokedex/national'}
            onClick={() => onAppChange('Home')}
            style={{ textDecoration: 'none' }}
          >
            <Button color='blue' fullWidth mt='md' radius='md'>
              Pokemon Database
            </Button>
          </Link>
        </Card>
      </Flex>
    </>
  );
};
