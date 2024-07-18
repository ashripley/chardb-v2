import { Flex } from '@mantine/core';
import { theme } from '../../theme/theme';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardViewSegment } from '../../components/Gallery/Segments/CardView';
import { setApp, setSearchTerm, setView } from '../../redux/gallery';
import { GalleryApp, isMobile } from '../../config';
import { GalleryStore } from '../../redux/store';
import { allAttributes } from '../../api/attribute';
import { allCards } from '../../api/card';
import { allPokemon } from '../../api/pokemon';
import { Cards } from '../../components/Gallery/Views/Cards';
import { Pokedex } from '../../components/Gallery/Views/Pokedex';
import { useLocation } from 'react-router-dom';
import { TextInputStyles } from '../../components/Base/TextInput';
import { pxToRem } from '../../utils';
import { Button, Loader, ScrollArea, TextInput } from '../../components/Base';
import { Canvas } from '../../layouts/Canvas';

export const Gallery = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const { app } = useSelector((state: GalleryStore) => state.gallery);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    try {
      onGalleryChange('cards');
      setView('card');
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
    <IconSearch
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
                  <Button
                    variant='filled'
                    bg={app === 'cards' ? 'white' : 'transparent'}
                    radius={pxToRem('xs')}
                    w={'40%'}
                    miw={120}
                    onClick={() => onGalleryChange('cards')}
                    styles={{
                      label: { color: theme.colors.bg.bgDarkGray100 },
                    }}
                    ff={theme.fonts.primary}
                    fw={500}
                  >
                    Cards
                  </Button>
                  <Button
                    variant='filled'
                    bg={app === 'pokedex' ? 'white' : 'transparent'}
                    radius={pxToRem('xs')}
                    w={'40%'}
                    miw={120}
                    onClick={() => onGalleryChange('pokedex')}
                    styles={{
                      label: {
                        color: theme.colors.bg.bgDarkGray100,
                      },
                    }}
                    ff={theme.fonts.primary}
                    fw={500}
                  >
                    Pokedex
                  </Button>
                </Flex>
                <Flex w={'auto'} justify={'flex-end'} gap={10}>
                  {app === 'cards' && !isMobile && <CardViewSegment />}
                  <TextInput
                    radius={pxToRem('xs')}
                    placeholder={
                      isMobile ? 'Pokemon..' : 'Search for a Pokemon'
                    }
                    variant='filled'
                    classNames={{ input: TextInputStyles.textInput }}
                    w={isMobile ? 'auto' : '70%'}
                    leftSection={icon}
                    miw={isMobile ? '' : 300}
                    onChange={(e: any) => onSearchInput(e.currentTarget.value)}
                  />
                  <Button
                    variant='filled'
                    bg={'white'}
                    radius={pxToRem('xs')}
                    w={isMobile ? 'auto' : '20%'}
                    miw={isMobile ? 'fit-content' : 120}
                    styles={{
                      label: {
                        color: theme.colors.bg.bgDarkGray100,
                      },
                    }}
                    onClick={onSearch}
                    disabled={input === ''}
                    ff={theme.fonts.primary}
                    fw={500}
                  >
                    Search
                  </Button>
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
