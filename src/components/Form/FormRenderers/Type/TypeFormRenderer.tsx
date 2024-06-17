import { Flex, TextInput } from '@mantine/core';
import numberClasses from '../../../../modules/NumberInput.module.css';
import { FormRenderer } from '../../formRenderer';
import styled from 'styled-components';
import { pxToRem } from '../../../../utils/responsiveSize';
import { ChangeEvent } from 'react';
import { validateTypeAttributeDefinition } from './TypeFormDefinition';

const Container = styled(Flex)`
  height: 80%;
  flex-direction: column;
  gap: ${pxToRem('sm')};
`;

export const TypeFormRenderer: FormRenderer = (props) => {
  validateTypeAttributeDefinition(props.formDefinition);

  const { formDefinition, type } = props;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange({
      ...formDefinition,
      type,
      name: event.currentTarget.value,
    });
  };

  const onMetaChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange({
      ...formDefinition,
      type,
      meta: {
        ...formDefinition.meta,
        color: event.currentTarget.value,
      },
    });
  };

  return (
    <>
      <Container>
        <TextInput
          placeholder='Name'
          value={formDefinition?.name ?? ''}
          radius={'lg'}
          w={'100%'}
          rightSection
          variant='filled'
          classNames={{ input: numberClasses.input }}
          onChange={onChange}
        />
        <TextInput
          variant='filled'
          radius='lg'
          placeholder='Colour (#)'
          value={formDefinition?.meta?.color ?? ''}
          classNames={{ input: numberClasses.input }}
          w={'100%'}
          onChange={onMetaChange}
        />
      </Container>
    </>
  );
};
