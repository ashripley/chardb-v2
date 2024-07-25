import { Flex } from '@mantine/core';
import { RootStore } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allPokemon } from '../../api/pokemon';
import { allAttributes } from '../../api/attribute';
import { allCards } from '../../api/card';
import { Canvas } from '../../layouts/Canvas';
import { CardForm, DataForm } from '../../components/Form';
import { UpdateCardForm } from '../../components/Form/UpdateCardForm';
import { TempDisplayCard, DatabaseCard, BaseCard } from '../../components/Card';
import { setCurrentCard, setStudioView } from '../../redux/root';
import { DatabaseSegment, StudioSegment } from '../../components/Segments';

export const Studio = () => {
  const { currentCard, studioView } = useSelector(
    (state: RootStore) => state.root
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStudioView('create'));
    allPokemon(dispatch);
    allAttributes(dispatch);
    allCards(dispatch);
    dispatch(setCurrentCard(undefined));
  }, []);

  const viewComponentContent = {
    create: {
      left: <CardForm />,
      right: currentCard?.pokemonData?.name ? (
        <TempDisplayCard card={currentCard} />
      ) : (
        <BaseCard />
      ),
    },
    update: {
      left: <UpdateCardForm />,
      right: currentCard?.pokemonData?.name ? (
        <TempDisplayCard card={currentCard} />
      ) : (
        <BaseCard />
      ),
    },
    db: {
      left: <DataForm />,
      right: <DatabaseCard />,
    },
  };

  return (
    <>
      <Flex w={'100%'} h={'calc(100% - 75px)'} p='xs'>
        <Canvas>
          <Flex h={'100%'} w={'100%'} align={'center'} justify={'center'}>
            <Flex
              w={'5%'}
              h={'100%'}
              align={'center'}
              justify={'center'}
              miw={70}
              pr={10}
            >
              <StudioSegment />
            </Flex>
            <Flex
              h={'100%'}
              w={'100%'}
              align={'center'}
              justify={'center'}
              direction={'column'}
            >
              <Flex
                w={'95%'}
                h='100%'
                justify={'center'}
                align={'center'}
                direction={'row'}
              >
                <Flex w={'60%'}>{viewComponentContent[studioView].left}</Flex>
                <Flex w={'40%'} h={550}>
                  {viewComponentContent[studioView].right}
                </Flex>
              </Flex>
              {studioView === 'db' && (
                <Flex
                  w={'100%'}
                  h={'auto'}
                  mih={100}
                  align={'center'}
                  justify={'center'}
                >
                  <DatabaseSegment />
                </Flex>
              )}
            </Flex>
          </Flex>
        </Canvas>
      </Flex>
    </>
  );
};
