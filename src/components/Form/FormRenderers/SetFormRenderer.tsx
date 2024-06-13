import { Flex, NumberInput, TextInput } from '@mantine/core';
import numberClasses from '../../../modules/NumberInput.module.css';
import { ChangeEvent, useState } from 'react';
import {
  AttributeDefinition,
  SetAttributeDefinition,
} from '../../../api/attribute';
import { FormRenderer } from '../formRenderer';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/responsiveSize';

const Container = styled(Flex)`
  height: 80%;
  flex-direction: column;
  gap: ${pxToRem('sm')};
`;

const SetFormRenderer: FormRenderer = (props) => {
  const [attribute, setAttribute] = useState<Partial<SetAttributeDefinition>>({
    type: 'set',
  });

  const handleMetaChange = (
    key: keyof SetAttributeDefinition['meta'],
    value: string | number
  ) => {
    setAttribute({
      ...attribute,
      meta: {
        ...(attribute.meta as SetAttributeDefinition['meta']),
        [key]: value,
      },
    });
    props.onChange(attribute as AttributeDefinition);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAttribute({ ...attribute, name: event.currentTarget.value });
    props.onChange(attribute as AttributeDefinition);
  };

  return (
    <>
      <Container>
        <TextInput
          placeholder='Name'
          value={attribute?.name ?? ''}
          radius={'lg'}
          w={'100%'}
          rightSection
          variant='filled'
          classNames={{ input: numberClasses.input }}
          onChange={handleChange}
        />
        <NumberInput
          variant='filled'
          radius='lg'
          placeholder='Total Cards'
          value={attribute?.meta?.totalCards ?? ''}
          classNames={{ input: numberClasses.input }}
          w={'100%'}
          hideControls
          onChange={(val) => handleMetaChange('totalCards', val)}
        />
        <NumberInput
          variant='filled'
          radius='lg'
          placeholder='Year'
          value={attribute?.meta?.year ?? ''}
          classNames={{ input: numberClasses.input }}
          w={'100%'}
          hideControls
          onChange={(val) => handleMetaChange('year', val)}
        />
      </Container>
    </>
  );
};

export default SetFormRenderer;
