import { Button, Center, Flex, Space, Title } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { StudioStore } from '../../redux/store';
import { AttributeDefinition, addAttributeMutation } from '../../api/attribute';
import { setAttributes, updateAttribute } from '../../redux/studio';
import { theme } from '../../theme/theme';
import styled from 'styled-components';
import Form from '../../components/Form';
import { camelCaseToTitleCase } from '../../utils';

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
  const { dbType, attribute, isDirty } = useSelector(
    (state: StudioStore) => state.studio
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [passedRendererData, setPassedRendererData] =
    useState<AttributeDefinition>();

  const rendererData = (val: AttributeDefinition) => setPassedRendererData(val);

  const dispatch = useDispatch();

  const onSave = async () => {
    try {
      setIsLoading(true);

      await addAttributeMutation(passedRendererData as AttributeDefinition);
      // clearFields()
    } catch (error) {
      throw new Error(`Error saving attribute DB: ${error}`);
    } finally {
      setTimeout(() => {
        dispatch(updateAttribute({}));
        dispatch(setAttributes({ isCreate: true, ...attribute }));
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title size='h3' fw={600} c={theme.colors.fonts.primary}>
          Create {camelCaseToTitleCase(dbType)}
        </Title>
        <Space h={50} />
        <Form onChange={rendererData} type={dbType} />
        {/* <Section onChange={rendererData} type={dbType} /> */}
        {/* {dbTypeMap[dbType].component} */}
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
            disabled={!isDirty}
          >
            Save
          </Button>
        </Flex>
      </Wrapper>
    </Container>
  );
};
