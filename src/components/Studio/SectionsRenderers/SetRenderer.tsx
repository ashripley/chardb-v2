import { Flex, NumberInput, TextInput } from '@mantine/core';
import numberClasses from '../../../modules/NumberInput.module.css';
import { useSelector } from 'react-redux';
import { StudioStore } from '../../../redux/store';
import { useEffect, useState } from 'react';
import {
  AttributeDefinition,
  SetAttributeDefinition,
} from '../../../api/attribute';
import SectionRenderer from '.';

export const SetRenderer: SectionRenderer = (props) => {
  console.log('props', props);
  // const dispatch = useDispatch();
  // const { attribute } = useSelector((state: StudioStore) => state.studio);
  const [tempSet, setTempSet] = useState<Partial<SetAttributeDefinition>>({
    type: 'set',
  });

  useEffect(() => {
    console.log('tempSet from set renderer', tempSet);
    props.onChange(tempSet as AttributeDefinition);
  }, [tempSet]);

  return (
    <>
      <Flex h='80%' direction={'column'} gap={25}>
        <TextInput
          placeholder='Name'
          value={tempSet?.name ?? ''}
          radius={'lg'}
          w={'100%'}
          rightSection
          variant='filled'
          classNames={{ input: numberClasses.input }}
          onChange={(event) =>
            setTempSet({
              ...tempSet,
              name: event.currentTarget.value,
            })
          }
        />
        <NumberInput
          variant='filled'
          radius='lg'
          placeholder='Total Cards'
          value={tempSet?.meta?.totalCards ?? ''}
          classNames={{ input: numberClasses.input }}
          w={'100%'}
          hideControls
          onChange={(val) =>
            setTempSet({
              ...tempSet,
              meta: {
                ...(tempSet.meta as SetAttributeDefinition['meta']),
                totalCards: val as number,
              },
            })
          }
        />
        <NumberInput
          variant='filled'
          radius='lg'
          placeholder='Year'
          value={tempSet?.meta?.year ?? ''}
          classNames={{ input: numberClasses.input }}
          w={'100%'}
          hideControls
          onChange={(val) =>
            setTempSet({
              ...tempSet,
              meta: {
                ...(tempSet.meta as SetAttributeDefinition['meta']),
                year: val as number,
              },
            })
          }
        />
      </Flex>
    </>
  );
};
