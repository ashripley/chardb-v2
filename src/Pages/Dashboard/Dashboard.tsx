import { Flex } from '@mantine/core';
import { theme } from '../../theme/theme';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Analytics } from '../../components/Dashboard/Analytics';
import { isMobile } from '../../config';
import { allCards } from '../../api/card';
import { allPokemon } from '../../api/pokemon';
import { allAttributes } from '../../api/attribute';
import { Button, Loader, Paper, ScrollArea } from '../../components/Base';

const StyledScrollArea = styled(ScrollArea)<{ isMobile: boolean }>`
  & > div > div {
    height: 95%;
  }

  & > div > div {
    display: ${({ isMobile }) => isMobile && 'flex !important'};
  }
`;

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      allCards(dispatch);
      allPokemon(dispatch);
      allAttributes(dispatch);
    } catch (e) {
      throw new Error(`Error: ${e}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Flex direction={'row'} w={'100%'} h={'calc(100% - 75px)'} p='xs'>
        <Flex direction={'column'} h={'100%'} w={'100%'} align={'center'}>
          <Paper
            radius='xl'
            p='lg'
            m='auto'
            w='100%'
            h='100%'
            bg={theme.colors.bg.bgGray25}
          >
            <Flex w={'100%'} h={'100%'} justify={'center'}>
              <Flex
                justify={'center'}
                align={'center'}
                direction={'column'}
                h={'100%'}
                w={'100%'}
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
                    justify={'flex-start'}
                    gap={10}
                    wrap={'wrap'}
                  >
                    <Button
                      variant='filled'
                      bg={'white'}
                      radius='lg'
                      w={'40%'}
                      miw={120}
                      onClick={() => {}}
                      styles={{
                        label: {
                          color: theme.colors.bg.bgDarkGray100,
                        },
                      }}
                      ff={theme.fonts.primary}
                      fw={500}
                    >
                      Analytics
                    </Button>
                  </Flex>
                </Flex>
                <StyledScrollArea
                  isMobile={isMobile}
                  h={'90%'}
                  w={'95%'}
                  type='never'
                  style={{ borderRadius: 15 }}
                >
                  {isLoading ? (
                    <Flex justify='center' align={'center'} h={'65vh'}>
                      <Loader
                        color={theme.colors.accents.char}
                        size='lg'
                        type='dots'
                      />
                    </Flex>
                  ) : (
                    <Flex
                      justify='space-evenly'
                      wrap='wrap'
                      gap={20}
                      h={'100%'}
                      w={isMobile ? '100%' : 'auto'}
                    >
                      <Analytics />
                    </Flex>
                  )}
                </StyledScrollArea>
              </Flex>
            </Flex>
          </Paper>
        </Flex>
      </Flex>
    </>
  );
};
