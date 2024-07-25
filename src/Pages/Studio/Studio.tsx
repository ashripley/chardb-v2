import { Flex } from '@mantine/core';
import { StudioViewSegment } from '../../components/Studio/Segments/StudioView';
import { BaseCard } from '../../components/Card/BaseCard';
import { DBTypeSegment } from '../../components/Studio/Segments/DBType';
import { RootStore } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allPokemon } from '../../api/pokemon';
import { allAttributes } from '../../api/attribute';
import { allCards } from '../../api/card';
import { Canvas } from '../../layouts/Canvas';
import { CardForm } from '../../components/Form';
import { UpdateCardDetails } from '../../components/Studio/Details/UpdateCardDetails';
import { DBCard } from '../../components/Studio/Cards/DBCard';
import { DataForm } from '../../components/Form/DataForm';
import { TempDisplayCard } from '../../components/Card/TempDisplayCard';
import { setCurrentCard, setStudioView } from '../../redux/root';

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
      left: <UpdateCardDetails />,
      right: currentCard?.pokemonData?.name ? (
        <TempDisplayCard card={currentCard} />
      ) : (
        <BaseCard />
      ),
    },
    db: {
      left: <DataForm />,
      right: <DBCard />,
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
              <StudioViewSegment />
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
                  <DBTypeSegment />
                </Flex>
              )}
            </Flex>
          </Flex>
        </Canvas>
      </Flex>
    </>
  );
};
