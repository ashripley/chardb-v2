import { Button, Center, Flex, Space, Title } from '@mantine/core';
import { useId, useState } from 'react';
import { theme } from '../../theme/theme';
import Form, { FormDefinition } from '../../components/Form';
import { addCardMutation, validateCardDefinition } from '../../api/card';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import styled from 'styled-components';

const Container = styled(Center)`
  height: 100%;
  width: 100%;
`;

const StyledFlex = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const CardForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const cardId = useId();

  const [formData, setFormData] = useState<FormDefinition>();
  const { pokemon } = useSelector((state: RootStore) => state.root);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      if (formData) {
        const formDataToAdd = { ...formData, cardId };
        validateCardDefinition(formDataToAdd);
        await addCardMutation(formDataToAdd, pokemon);
      }
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
    <Container>
      <StyledFlex>
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
          type='newCard'
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
            disabled={!formData}
          >
            Create
          </Button>
        </Flex>
      </StyledFlex>
    </Container>
  );
};