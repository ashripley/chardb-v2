import { Button, Center, Flex, Space, Title } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../redux/store';
import { useState } from 'react';
import { theme } from '../../../theme/theme';
import Form, { FormDefinition } from '../../Form';
import { deleteCardMutation, updateCardMutation } from '../../../api/card';
import { setCurrentCard } from '../../../redux/root';

interface ActionButtonProps {
  bg: string;
  w: number;
  c: string;
  actionLoading: boolean;
  label: string;
  loaderColour: string;
}

export const UpdateCardDetails = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [formData, setFormData] = useState<FormDefinition>();

  const dispatch = useDispatch();

  const { cards } = useSelector((state: RootStore) => state.root);

  const onUpdate = async (action: 'update' | 'delete') => {
    try {
      action === 'update' ? setIsUpdating(true) : setIsDeleting(true);

      formData &&
        (action === 'update'
          ? await updateCardMutation(formData)
          : await deleteCardMutation(formData.cardId));
    } catch (e) {
      throw new Error(`error actioning card update', ${e}`);
    } finally {
      action === 'update' ? setIsUpdating(false) : setIsDeleting(false);
    }
  };

  const ActionButton: React.FC<ActionButtonProps> = ({
    bg,
    actionLoading,
    c,
    label,
    w,
    loaderColour,
  }) => (
    <Button
      variant='filled'
      bg={bg}
      radius='lg'
      size='lg'
      miw={w}
      styles={{
        label: {
          color: c,
        },
      }}
      onClick={() => onUpdate(label.toLowerCase() as 'update' | 'delete')}
      loading={actionLoading}
      loaderProps={{
        type: 'dots',
        color: loaderColour,
      }}
      disabled={!formData}
    >
      {label}
    </Button>
  );

  const onFormDataChange = (updatedData: Partial<FormDefinition>) => {
    if (updatedData.pokemonData?.name) {
      const cardFormData = cards.find(
        (c) =>
          c.pokemonData.name === updatedData.pokemonData?.name.toLowerCase()
      );

      dispatch(setCurrentCard(cardFormData));
      setFormData({ ...cardFormData } as FormDefinition);
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
            Update Your Card
          </Title>
        </Flex>
        <Space h={50} />
        <Form
          formDefinition={formData as FormDefinition}
          onChange={onFormDataChange}
          type='exisitingCard'
        />
        <Space h={50} />
        <Flex h='10%' gap={25}>
          <ActionButton
            bg={theme.colors.status.error}
            c='white'
            label='Delete'
            w={150}
            actionLoading={isDeleting}
            loaderColour='white'
          />
          <ActionButton
            bg={'white'}
            c={theme.colors.bg.bgDarkGray100}
            label='Update'
            w={150}
            actionLoading={isUpdating}
            loaderColour={theme.colors.accents.char}
          />
        </Flex>
      </Flex>
    </Center>
  );
};
