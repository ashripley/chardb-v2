import { Button, Center, Flex, Space, Title } from '@mantine/core';
import { theme } from '../../../theme/theme';
import { SetRenderer } from '../SectionsRenderers/SetRenderer';
import { StudioStore } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  AttributeDefinition,
  addAttributeMutation,
} from '../../../api/attribute';
import { setAttributes, updateAttribute } from '../../../redux/studio';

export const dbTypeMap: Record<string, any> = {
  // set: { label: 'Set', component: <Sets /> },
  // cardType: { label: 'Card Type', component: <CardTypes /> },
  // type: { label: 'Type', component: <Types /> },
  // condition: { label: 'Condition', component: <Conditions /> },
};

export const DBDetails = () => {
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
    <Center h={'100%'} w={'100%'}>
      <Flex
        h='100%'
        w='100%'
        direction={'column'}
        justify={'space-between'}
        align={'center'}
        m='auto'
      >
        <Title size='h3' fw={600} c={theme.colors.fonts.primary}>
          {/* Create {dbTypeMap[dbType].label} */}
        </Title>
        <Space h={50} />
        <SetRenderer onChange={rendererData} />
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
            // disabled={!isDirty}
          >
            Save
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
};
