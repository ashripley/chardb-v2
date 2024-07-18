import { Flex, Title, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { theme } from '../../theme/theme';
import { createElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../redux/gallery';
import { updateApp } from '../../redux/root';
import { Link } from 'react-router-dom';
import { isMobile } from '../../config';
import {
  Button,
  Card,
  Container,
  Paper,
  Space,
  TextInput,
} from '../../components/Base';
import { pxToRem } from '../../utils';
import { TextInputStyles } from '../../components/Base/TextInput';

const icon = (
  <IconSearch
    style={{ width: pxToRem('xs'), height: pxToRem('xs') }}
    color='white'
  />
);

const styles = {
  borderRadius: {
    borderTopLeftRadius: pxToRem('sm'),
    borderTopRightRadius: pxToRem('sm'),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
};

export const Home = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>('');

  const onSearchInput = (val: string) => {
    setInput(val);
  };

  const onSearch = () => {
    dispatch(setSearchTerm(input));
    dispatch(updateApp('Gallery'));
  };

  return (
    <>
      <Container h={'calc(100% - 75px)'} m={'auto'}>
        <Flex
          direction={'column'}
          m={'auto'}
          gap={25}
          h={'100%'}
          justify={'space-evenly'}
        >
          <Flex
            direction={'column'}
            justify={'center'}
            align={'center'}
            h={'35%'}
            ta={isMobile ? 'center' : 'inherit'}
          >
            <Title
              order={1}
              fw={isMobile ? 500 : 600}
              c={theme.colors.fonts.primary}
              ff={theme.fonts.primary}
            >
              A Place To Store Your Nostalgia
            </Title>
            <Space h={10} />
            <Text
              size='md'
              fw={400}
              c={theme.colors.fonts.primary}
              ff={theme.fonts.primary}
            >
              Welcome to chardb. A collection site for your Pokémon cards.
            </Text>
            <Space h={35} />
            <Flex
              w={isMobile ? '80%' : 'auto'}
              justify={'center'}
              gap={10}
              align={'center'}
            >
              <TextInput
                radius={pxToRem('xs')}
                placeholder={isMobile ? 'Charmander..' : 'Search for a Pokemon'}
                variant='filled'
                classNames={{ input: TextInputStyles.textInput }}
                w={300}
                leftSection={icon}
                onChange={(e: any) => onSearchInput(e.target.value)}
              />
              <Link to={'/gallery'} onClick={onSearch}>
                <Button
                  variant='filled'
                  bg={theme.colors.accents.char}
                  radius={pxToRem('xs')}
                  w={100}
                  styles={{ label: { color: 'white' } }}
                  disabled={!input}
                  ff={theme.fonts.primary}
                  fw={500}
                >
                  Search
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            w={'100%'}
            justify={'center'}
            direction={'column'}
            align={'center'}
            h={isMobile ? '50%' : '60%'}
          >
            <Card
              h={'auto'}
              mih={isMobile ? '' : 100}
              w={isMobile ? '80%' : '70%'}
              bg={theme.colors.accents.squir}
              style={{ ...styles.borderRadius }}
            >
              <Flex
                justify={'space-between'}
                m={'auto'}
                p={'xl'}
                w={'100%'}
                h={'100%'}
                align={'center'}
              >
                <Title order={3} fw={600} c={'white'} ff={theme.fonts.primary}>
                  Squirtle
                </Title>
                <Paper
                  h={35}
                  w={35}
                  bg='var(--mantine-color-white)'
                  radius={pxToRem('md')}
                >
                  <Flex justify='center' align='center' h={'100%'} w={'100%'}>
                    {createElement(theme.icons.water, {
                      style: { width: 25, height: 25 },
                      stroke: 1.5,
                      color: theme.colors.types.water,
                    })}
                  </Flex>
                </Paper>
              </Flex>
            </Card>
            <Card
              h={'auto'}
              mih={isMobile ? '' : 100}
              w={isMobile ? '90%' : '80%'}
              bg={theme.colors.accents.bulb}
              style={{ ...styles.borderRadius }}
            >
              <Flex
                justify={'space-between'}
                m={'auto'}
                p={'xl'}
                w={'100%'}
                h={'100%'}
                align={'center'}
              >
                <Title order={3} fw={600} c={'white'} ff={theme.fonts.primary}>
                  Bulbasaur
                </Title>
                <Paper
                  h={35}
                  w={35}
                  bg='var(--mantine-color-white)'
                  radius={pxToRem('md')}
                >
                  <Flex justify='center' align='center' h={'100%'} w={'100%'}>
                    {createElement(theme.icons.grass, {
                      style: { width: 25, height: 25 },
                      stroke: 1.5,
                      color: theme.colors.types.grass,
                    })}
                  </Flex>
                </Paper>
              </Flex>
            </Card>
            <Card
              h={'auto'}
              mih={isMobile ? '' : 100}
              w={isMobile ? '100%' : '90%'}
              bg={theme.colors.accents.char}
              style={{ ...styles.borderRadius }}
              pb={0}
            >
              <Flex
                justify={'space-between'}
                m={'auto'}
                p={'xl'}
                w={'100%'}
                align={'flex-start'}
                h={'30%'}
              >
                <Title order={3} fw={600} c={'white'} ff={theme.fonts.primary}>
                  Charmander
                </Title>
                <Paper
                  h={35}
                  w={35}
                  bg='var(--mantine-color-white)'
                  radius={pxToRem('md')}
                >
                  <Flex justify='center' align='center' h={'100%'} w={'100%'}>
                    {createElement(theme.icons.fire, {
                      style: { width: 25, height: 25 },
                      stroke: 1.5,
                      color: theme.colors.types.fire,
                    })}
                  </Flex>
                </Paper>
              </Flex>
              <Space h={20} />
              <Flex
                w={'100%'}
                justify={'center'}
                h={'70%'}
                m={'auto'}
                p={'xl'}
                pb={0}
                pt={0}
              >
                <Paper
                  w={'100%'}
                  h={'100%'}
                  bg={'white'}
                  radius={pxToRem('xxs')}
                  style={{ ...styles.borderRadius }}
                >
                  <Flex
                    w={'100%'}
                    h={'100%'}
                    justify={'center'}
                    align={'center'}
                  >
                    <img
                      src={
                        'https://img.pokemondb.net/sprites/home/normal/charmander.png'
                      }
                      width={'auto'}
                      height={'auto'}
                      style={{
                        position: 'relative',
                        top: '25%',
                        maxWidth: isMobile ? 150 : 250,
                      }}
                    />
                  </Flex>
                </Paper>
              </Flex>
            </Card>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};
