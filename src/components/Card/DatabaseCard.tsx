import {
  Card,
  Flex,
  Text,
  ScrollArea,
  Title,
  Space,
  CloseButton,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { theme } from '../../styles/theme';
import {
  AttributeDefinition,
  deleteAttributeMutation,
} from '../../api/attribute';
import { setAttributes } from '../../redux/root';
import { pxToRem } from '../../utils';

export const DatabaseCard = () => {
  const { attributes, formType } = useSelector(
    (state: RootStore) => state.root
  );
  const dispatch = useDispatch();

  // const keysToGap = ['set', 'type'];

  const labelMap: Record<string, string> = {
    set: 'Sets',
    cardType: 'Card Types',
    type: 'Types',
    condition: 'Conditions',
    totalCards: 'Total Cards',
    colour: 'Colour',
    year: 'Year',
  };

  const onDelete = (att: AttributeDefinition) => {
    const { id } = att;

    deleteAttributeMutation(id);
    dispatch(
      setAttributes({
        ...attributes,
      })
    );
  };

  const attributesToDisplay = () => {
    const currentAttributes: AttributeDefinition[] = [];
    for (const attribute of attributes) {
      if (attribute.type === formType) {
        currentAttributes.push(attribute);
      }
    }

    return currentAttributes;
  };

  const currentAttributes = attributesToDisplay();

  const AttributeCard = () => (
    <>
      {currentAttributes.map((att: AttributeDefinition, index: number) => (
        <Flex justify={'space-between'} w={'100%'} key={index}>
          <Flex w={'80%'} direction={'column'} justify={'center'}>
            <Flex w={'100%'} direction={'row'} gap={5}>
              <Text c={'white'}>{att.name}</Text>
            </Flex>
          </Flex>
          <Flex w={'10%'} align={'center'}>
            <CloseButton
              c={'white'}
              variant='transparent'
              onClick={() => onDelete(att)}
            />
          </Flex>
        </Flex>
      ))}
    </>
  );

  return (
    <>
      <Card
        miw={400}
        mih={500}
        w={'auto'}
        h={'auto'}
        p={'lg'}
        radius={pxToRem('sm')}
        bg={theme.colors.bg.bgGray100}
      >
        <Flex
          justify='flex-start'
          align='center'
          direction={'column'}
          w='100%'
          h='100%'
          m='auto'
        >
          <Title
            size='h3'
            h={'5%'}
            fw={600}
            w={'100%'}
            display={'contents'}
            c='white'
          >
            {labelMap[formType]}
          </Title>
          <Space h={20} />
          <ScrollArea
            h={'90%'}
            w={'100%'}
            type='never'
            style={{ borderRadius: 5 }}
          >
            <Flex
              justify={'flex-start'}
              direction={'column'}
              // gap={keysToGap.includes(formType) ? 15 : 0}
            >
              <AttributeCard />
            </Flex>
          </ScrollArea>
        </Flex>
      </Card>
    </>
  );
};
