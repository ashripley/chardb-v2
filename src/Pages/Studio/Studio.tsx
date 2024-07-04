import { Paper, Flex } from '@mantine/core';
import { theme } from '../../theme/theme';
import { StudioViewSegment } from '../../components/Studio/Segments/StudioView';
import { StudioCard } from '../../components/Studio/Cards/StudioCard';
import { DBTypeSegment } from '../../components/Studio/Segments/DBType';
import { StudioStore } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setView } from '../../redux/studio';
import { allPokemon } from '../../api/pokemon';
import { allAttributes } from '../../api/attribute';
import { allCards } from '../../api/card';
import { AttributeCanvas, CardCanvas } from '../../layouts/Canvas';

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
      left: <CardCanvas />,
      right: <StudioCard />,
    },
    update: {
      // left: <UpdateCardDetails />,
      right: <StudioCard />,
    },
    db: {
      left: <AttributeCanvas />,
      // right: <DBCard />,
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
        <Flex direction={'column'} h={'100%'} w={'90%'} align={'center'}>
          <Paper
            radius='xl'
            p='lg'
            m='auto'
            w='100%'
            h={'100%'}
            bg={theme.colors.bg.bgGray25}
          >
            <Flex w={'100%'} h='100%' align={'center'} direction={'column'}>
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
            </Flex>
          </Paper>
        </Flex>
      </Flex>
    </>
  );
};
