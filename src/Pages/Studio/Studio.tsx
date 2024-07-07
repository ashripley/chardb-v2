import { Flex } from '@mantine/core';
import { StudioViewSegment } from '../../components/Studio/Segments/StudioView';
import { BaseCard } from '../../components/Card/BaseCard';
import { DBTypeSegment } from '../../components/Studio/Segments/DBType';
import { StudioStore } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setView } from '../../redux/studio';
import { allPokemon } from '../../api/pokemon';
import { allAttributes } from '../../api/attribute';
import { allCards } from '../../api/card';
import { Canvas } from '../../layouts/Canvas';
import { CardForm } from '../../components/Form';
import { UpdateCardDetails } from '../../components/Studio/Details/UpdateCardDetails';
import { DBCard } from '../../components/Studio/Cards/DBCard';
import { DataForm } from '../../components/Form/DataForm';

export const Studio = () => {
  const { view } = useSelector((state: StudioStore) => state.studio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setView('create'));
    // dispatch(updatePokemon({}));
    allPokemon(dispatch);
    allAttributes(dispatch);
    allCards(dispatch);
  }, []);

  const viewComponentContent = {
    create: {
      left: <CardForm />,
      right: <BaseCard />,
    },
    update: {
      left: <UpdateCardDetails />,
      right: <BaseCard />,
    },
    db: {
      left: <DataForm />,
      right: <DBCard />,
    },
  };

  return (
    <>
      <Flex direction={'row'} w={'100%'} h={'calc(100% - 75px)'} p='xs'>
        <Flex
          w={'5%'}
          h={'95%'}
          align={'center'}
          justify={'center'}
          miw={70}
          pr={10}
        >
          <StudioViewSegment />
        </Flex>
        <Canvas>
          <Flex
            w={'100%'}
            h='100%'
            justify={'center'}
            align={'center'}
            direction={'row'}
          >
            <Flex w={'60%'}>{viewComponentContent[view].left}</Flex>
            <Flex w={'40%'} h={550}>
              {viewComponentContent[view].right}
            </Flex>
          </Flex>
          {view === 'db' && (
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
        </Canvas>
      </Flex>
    </>
  );
};
