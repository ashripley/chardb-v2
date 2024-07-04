import { Button, Center, Flex, Space, Title } from '@mantine/core';
import { useState } from 'react';
import { theme } from '../../theme/theme';
import Form, { FormDefinition } from '../../components/Form';
import {
  CardDefinition,
  addCardMutation,
  validateCardDefinition,
} from '../../api/card';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';

export const CardCanvas = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [tempCard] = useState<Partial<CardDefinition>>();

  const [formData, setFormData] = useState<FormDefinition>();
  const { pokemon } = useSelector((state: RootStore) => state.root);

  // useEffect(() => {
  //   // dispatch(updatePokemon({}));
  //   dispatch(updateCard({}));
  // }, []);

  // console.log(
  //   'attributes',
  //   attributes.find((att) => att.type === 'set')
  // );

  // const onPokemonChange = (val: any) => {
  //   dispatch(updatePokemon({ ...allPokemon[val?.toLowerCase()] }));
  // };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      validateCardDefinition(formData as CardDefinition);
      await addCardMutation(formData as CardDefinition, pokemon);
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setFormData({} as FormDefinition);
      }, 1000);
    }
  };

  return (
    <Center h={'100%'} w={'100%'}>
      <Flex
        h='100%'
        w='100%'
        direction={'column'}
        justify={'center'}
        align={'center'}
        m='auto'
      >
        <Flex h='10%'>
          <Title size='h3' fw={600} c={theme.colors.fonts.primary}>
            Create Your Card
          </Title>
        </Flex>
        <Space h={50} />
        <Form
          formDefinition={{ ...formData, type: 'card' } as FormDefinition}
          onChange={(updatedData) => {
            setFormData({ ...formData, ...updatedData } as FormDefinition);
          }}
          type='card'
        />
        <Space h={50} />
        <Flex h='10%'>
          <Button
            variant='filled'
            bg={'white'}
            radius='lg'
            size='lg'
            miw={250}
            styles={{
              label: {
                color: theme.colors.bg.bgDarkGray100,
              },
            }}
            onClick={onSubmit}
            loading={isLoading}
            loaderProps={{
              type: 'dots',
              color: theme.colors.accents.char,
            }}
            // disabled={isCreateDisabled}
          >
            Create
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
};
