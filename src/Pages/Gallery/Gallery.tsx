import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from '@mantine/core';
import { theme } from '../../styles/theme';
import { CardSegment } from '../../components/Segments';
import { GalleryApp, isMobile } from '../../config';
import { RootStore } from '../../redux/store';
import { allAttributes, allCards, allPokemon } from '../../api';
import { useLocation } from 'react-router-dom';
import { pxToRem } from '../../utils';
import { Loader, ScrollArea, TextInput } from '../../components/Base';
import { Canvas } from '../../layouts/Canvas';
import { setApp, setGalleryView, setSearchTerm } from '../../redux/root';
import { Cards, Pokedex } from './Views';
import icons from '../../assets/icons/icons';
import { StyledButton } from '../../components';

export const Gallery = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const { app } = useSelector((state: RootStore) => state.root);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    try {
      onGalleryChange('cards');
      setGalleryView('card');
      allCards(dispatch);
      allPokemon(dispatch);
      allAttributes(dispatch);
    } catch (e) {
      throw new Error(`Error: ${e}`);
    } finally {
      setIsLoading(false);
    }
  }, [location.pathname === '/gallery']);

  const onGalleryChange = (name: GalleryApp) => {
    dispatch(setApp(name));
  };

  const onSearchInput = (val: string) => {
    setInput(val);
  };

  const onSearch = () => {
    dispatch(setSearchTerm(input));
  };

  const icon = (
    <icons.search
      style={{ width: pxToRem('xs'), height: pxToRem('xs') }}
      color='white'
    />
  );

  return (
    <>
      <Flex direction={'row'} w={'100%'} h={'calc(100% - 75px)'} p='xs'>
        <Flex direction={'column'} h={'100%'} w={'100%'} align={'center'}>
          <Canvas>
            <Flex
              justify={'center'}
              align={'center'}
              direction={'column'}
              h={'100%'}
              w={'100%'}
              gap={isMobile ? '25px' : ''}
            >
              <Flex
                w={'95%'}
                h={'auto'}
                mih={100}
                align={'center'}
                justify={'space-between'}
                wrap={'wrap'}
              >
                <Flex
                  w={'auto'}
                  miw={300}
                  justify={isMobile ? 'center' : 'flex-start'}
                  gap={10}
                  wrap={'wrap'}
                >
                  <StyledButton
                    style={{
                      backgroundColor:
                        app === 'cards' ? 'white' : 'transparent',
                      width: '40%',
                      minWidth: 120,
                      fontWeight: 500,
                    }}
                    onClick={() => onGalleryChange('cards')}
                  >
                    Cards
                  </StyledButton>
                  <StyledButton
                    style={{
                      backgroundColor:
                        app === 'pokedex' ? 'white' : 'transparent',
                      width: '40%',
                      minWidth: 120,
                      fontWeight: 500,
                    }}
                    onClick={() => onGalleryChange('pokedex')}
                  >
                    Pokedex
                  </StyledButton>
                </Flex>
                <Flex w={'auto'} justify={'flex-end'} gap={10}>
                  {app === 'cards' && !isMobile && <CardSegment />}
                  <TextInput
                    radius={pxToRem('xs')}
                    placeholder={
                      isMobile ? 'Pokemon..' : 'Search for a Pokemon'
                    }
                    variant='filled'
                    w={isMobile ? 'auto' : '70%'}
                    leftSection={icon}
                    miw={isMobile ? '' : 300}
                    onChange={(e: any) => onSearchInput(e.currentTarget.value)}
                  />
                  <StyledButton
                    style={{
                      backgroundColor: 'white',
                      width: isMobile ? 'auto' : '20%',
                      minWidth: isMobile ? 'fit-content' : 120,
                      fontWeight: 500,
                    }}
                    onClick={onSearch}
                    disabled={input === ''}
                  >
                    Search
                  </StyledButton>
                </Flex>
              </Flex>
              <ScrollArea
                h={'90%'}
                w={'95%'}
                type='never'
                style={{ borderRadius: 35 }}
              >
                {isLoading ? (
                  <Flex justify='center' align={'center'} h={'65vh'}>
                    <Loader
                      color={theme.colors.accents.char}
                      size='lg'
                      type='dots'
                    />
                  </Flex>
                ) : app === 'cards' ? (
                  <Cards />
                ) : (
                  <Pokedex />
                )}
              </ScrollArea>
            </Flex>
          </Canvas>
        </Flex>
      </Flex>
    </>
  );
};
