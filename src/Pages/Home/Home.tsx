import { theme } from '../../styles/theme';
import { createElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm, updateApp } from '../../redux/root';
import { Link } from 'react-router-dom';
import { isMobile } from '../../config';
import { pxToRem } from '../../utils';
import icons from '../../assets/icons/icons';
import { StyledButton } from '../../components';
import styled from 'styled-components';
import { StyledTextField } from '../../components/Input/TextField';

const Container = styled.div`
  height: calc(100% - 75px);
  margin: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const IconContainer = styled.div`
  height: ${pxToRem('md')};
  width: ${pxToRem('md')};
  background-color: white;
  border-radius: ${pxToRem('md')};
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: ${pxToRem('xxs')};
  border-top-left-radius: ${pxToRem('sm')};
  border-top-right-radius: ${pxToRem('sm')};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const Card = styled.div<{ width: string; bg: string }>`
  height: 'auto';
  min-height: ${isMobile ? '' : 100};
  width: ${({ width }) => width};
  background-color: ${({ bg }) => bg};
  border-top-left-radius: ${pxToRem('sm')};
  border-top-right-radius: ${pxToRem('sm')};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

// const icon = (
//   <icons.search
//     style={{ width: pxToRem('xs'), height: pxToRem('xs') }}
//     color='white'
//   />
// );

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
      <Container>
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
            <Flex
              m={0}
              p={0}
              direction={'row'}
              wrap={'wrap'}
              justify={'center'}
            >
              <Title
                order={1}
                fw={isMobile ? 500 : 600}
                c={theme.colors.fonts.primary}
                ff={theme.fonts.primary}
              >
                Chardb.
              </Title>
              <div style={{ width: 5 }} />
              <Title
                order={1}
                fw={isMobile ? 500 : 600}
                c={theme.colors.bg.bgDarkGray75}
                ff={theme.fonts.primary}
              >
                Store your nostalgia.
              </Title>
            </Flex>
            <div style={{ height: 35 }} />
            <Flex
              w={isMobile ? '80%' : 'auto'}
              justify={'center'}
              gap={10}
              align={'center'}
            >
              <StyledTextField
                placeholder={isMobile ? 'Charmander..' : 'Search for a Pokemon'}
                onChange={(e: any) => onSearchInput(e.target.value)}
              />
              <StyledLink to={'/gallery'} onClick={onSearch}>
                <StyledButton
                  style={{
                    backgroundColor: theme.colors.accents.char,
                    width: 100,
                    minWidth: 120,
                    fontWeight: 500,
                    color: 'white',
                  }}
                  disabled={!input}
                >
                  Search
                </StyledButton>
              </StyledLink>
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
              width={isMobile ? '80%' : '70%'}
              bg={theme.colors.accents.squir}
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
                  Lapras
                </Title>
                <IconContainer>
                  <Flex justify='center' align='center' h={'100%'} w={'100%'}>
                    {createElement(icons.water, {
                      style: { width: 25, height: 25 },
                      stroke: 1.5,
                      color: theme.colors.types.water,
                    })}
                  </Flex>
                </IconContainer>
              </Flex>
            </Card>
            <Card
              width={isMobile ? '90%' : '80%'}
              bg={theme.colors.accents.bulb}
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
                  Vileplume
                </Title>
                <IconContainer>
                  <Flex justify='center' align='center' h={'100%'} w={'100%'}>
                    {createElement(icons.grass, {
                      style: { width: 25, height: 25 },
                      stroke: 1.5,
                      color: theme.colors.types.grass,
                    })}
                  </Flex>
                </IconContainer>
              </Flex>
            </Card>
            <Card
              width={isMobile ? '100%' : '90%'}
              bg={theme.colors.accents.char}
              style={{ paddingBottom: 0 }}
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
                <IconContainer>
                  <Flex justify='center' align='center' h={'100%'} w={'100%'}>
                    {createElement(icons.fire, {
                      style: { width: 25, height: 25 },
                      stroke: 1.5,
                      color: theme.colors.types.fire,
                    })}
                  </Flex>
                </IconContainer>
              </Flex>
              <div style={{ height: 20 }} />
              <Flex
                w={'100%'}
                justify={'center'}
                h={'70%'}
                m={'auto'}
                p={'xl'}
                pb={0}
                pt={0}
              >
                <ImageContainer>
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
                </ImageContainer>
              </Flex>
            </Card>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};
