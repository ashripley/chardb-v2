import { Button, Center, Flex, Space, Title } from '@mantine/core';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootStore } from '../../redux/store';
import {
  Type,
  addAttributeMutation,
  validateAttributeDefinition,
} from '../../api/attribute';
import { theme } from '../../theme/theme';
import styled from 'styled-components';
import { camelCaseToTitleCase } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
import Form, { FormDefinition } from '../../components/Form';

const Container = styled(Center)`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const Canvas = () => {
  const { formType } = useSelector((state: RootStore) => state.root);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialState: FormDefinition = {
    type: formType as Type,
    id: uuidv4(),
    name: '',
  };

  const [formData, setFormData] = useState<FormDefinition>({ ...initialState });

  const onSave = async () => {
    try {
      setIsLoading(true);

      validateAttributeDefinition(formData);
      await addAttributeMutation(formData);
      setFormData({ ...initialState });
    } catch (error) {
      throw new Error(`Error saving attribute DB: ${error}`);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title size='h3' fw={600} c={theme.colors.fonts.primary}>
          Create {camelCaseToTitleCase(formType)}
        </Title>
        <Space h={50} />
        <Form
          formDefinition={{ ...formData, type: formType }}
          onChange={(updatedData) => {
            setFormData({ ...formData, ...updatedData });
          }}
          type={formType}
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
            onClick={onSave}
            loading={isLoading}
            loaderProps={{
              type: 'dots',
              color: theme.colors.accents.char,
            }}
            disabled={!formData}
          >
            Save
          </Button>
        </Flex>
      </Wrapper>
    </Container>
  );
};