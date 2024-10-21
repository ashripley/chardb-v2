import { Card, Divider, Flex, Grid, Group, Paper, Space } from '@mantine/core';
import { theme } from '../../styles/theme';
import { pxToRem } from '../../utils';
import icons from '../../assets/icons/icons';

export const BaseCard = () => {
  return (
    <>
      <Card
        miw={350}
        mih={450}
        maw={350}
        radius={pxToRem('sm')}
        bg={theme.colors.bg.bgGray100}
      >
        <Grid w={'100%'}>
          <Grid.Col span={12}>
            <Flex justify='space-between' align='center' w='90%' m='auto'>
              <Divider size='xl' w='40%' color='white' />
              <Paper
                h={30}
                w={30}
                bg='var(--mantine-color-white)'
                radius={pxToRem('sm')}
              >
                <Flex justify='center' align='center' h={'100%'} w={'100%'}>
                  <icons.fire
                    style={{ width: 25, height: 25 }}
                    stroke={1.5}
                    color='var(--mantine-color-white)'
                    fill={theme.colors.bg.bgGray100}
                  />
                </Flex>
              </Paper>
            </Flex>
          </Grid.Col>
          <Grid.Col span={12}>
            <Card w='90%' h={180} radius='lg' m='auto' p={'sm'}>
              <Flex direction='column' h='100%' justify={'center'}>
                <Card h='100%' radius='lg' m='auto'>
                  <></>
                </Card>
              </Flex>
            </Card>
          </Grid.Col>
          <Grid.Col span={12}>
            <Group w='100%' m='auto' p={15} gap={5}>
              <Flex w='100%' mih={25}>
                <Divider size='xl' w='90%' color='white' mih={25} />
              </Flex>
              <Flex w='100%' mih={25}>
                <Divider size='xl' w='60%' color='white' mih={25} />
              </Flex>
              <Flex w='100%' mih={25}>
                <Divider size='xl' w='50%' color='white' mih={25} />
              </Flex>
              <Flex w='100%' mih={25}>
                <Divider
                  size='xl'
                  w='60%'
                  color='white'
                  mih={25}
                  display={'flex'}
                />
              </Flex>
              <Space h={25} />
            </Group>
          </Grid.Col>
          <Grid.Col span={12}>
            <Space h={30} />
            <Flex
              m='auto'
              w='100%'
              justify='space-between'
              p={15}
              align='center'
            >
              <Divider size='xl' w={'100%'} color='white' />
            </Flex>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
};
