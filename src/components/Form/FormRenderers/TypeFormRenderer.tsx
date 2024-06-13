import { Flex, TextInput } from '@mantine/core';
import numberClasses from '../../../modules/NumberInput.module.css';
import { FormRenderer } from '../formRenderer';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/responsiveSize';
import {
  AttributeDefinition,
  TypeAttributeDefinition,
} from '../../../api/attribute';
import { ChangeEvent, useState } from 'react';

const Container = styled(Flex)`
  height: 80%;
  flex-direction: column;
  gap: ${pxToRem('sm')};
`;

const TypeFormRenderer: FormRenderer = (props) => {
  const [attribute, setAttribute] = useState<Partial<TypeAttributeDefinition>>({
    type: 'type',
  });

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAttribute({ ...attribute, name: event.currentTarget.value });
    props.onChange(attribute as AttributeDefinition);
  };

  const onMetaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAttribute({
      ...attribute,
      meta: {
        ...(attribute.meta as TypeAttributeDefinition['meta']),
        color: event.currentTarget.value,
      },
    });
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
          onChange={onNameChange}
        />
        <TextInput
          variant='filled'
          radius='lg'
          placeholder='Colour (#)'
          value={attribute?.meta?.color ?? ''}
          classNames={{ input: numberClasses.input }}
          w={'100%'}
          onChange={onMetaChange}
        />
      </Container>
    </>
  );
};

export default TypeFormRenderer;
