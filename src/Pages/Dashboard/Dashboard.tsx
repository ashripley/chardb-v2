import { Flex } from '@mantine/core';
import { theme } from '../../styles/theme';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Analytics } from './Views';
import { isMobile } from '../../config';
import { allCards, allAttributes, allPokemon } from '../../api';
import { allImages } from '../../api/images/images';
import { StyledButton } from '../../components';
import { pxToRem } from '../../utils';

const ScrollableDiv = styled.div`
  height: 90%;
  width: 95%;
  border-radius: 15;
  overflow: auto;
`;

const Container = styled.div`
  border-radius: ${pxToRem('xl')};
  padding: ${pxToRem('lg')};
  margin: 'auto';
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.bg.bgGray25};
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
      allImages(dispatch);
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
          <Container>
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
                    <StyledButton
                      style={{
                        width: '40%',
                        minWidth: 120,
                        fontWeight: 500,
                      }}
                      onClick={() => {}}
                    >
                      Analytics
                    </StyledButton>
                  </Flex>
                </Flex>
                <ScrollableDiv>
                  {isLoading ? (
                    <Flex justify='center' align={'center'} h={'65vh'}>
                      <></>
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
                </ScrollableDiv>
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </>
  );
};
