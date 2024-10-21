import { Flex, NumberInput, TextInput } from '@mantine/core';
import { ChangeEvent } from 'react';
import { FormRenderer } from '../../formRenderer';
import styled from 'styled-components';
import { pxToRem } from '../../../../utils';
import { validateSetAttributeDefinition } from './SetFormDefinition';

const Container = styled(Flex)`
  height: 80%;
  flex-direction: column;
  gap: ${pxToRem('sm')};
`;

export const SetFormRenderer: FormRenderer = (props) => {
  validateSetAttributeDefinition(props.formDefinition);

  const { formDefinition, type } = props;

  const handleMetaChange = (key: string, value: number) => {
    props.onChange({
      ...formDefinition,
      type,
      meta: {
        ...formDefinition.meta,
        [key]: value,
      },
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange({
      ...formDefinition,
      type,
      name: event.currentTarget.value,
    });
  };

  return (
    <>
      <Container>
        <TextInput
          placeholder='Name'
          value={formDefinition?.name ?? ''}
          radius={pxToRem('xs')}
          w={'100%'}
          rightSection
          variant='filled'
          onChange={handleChange}
        />
        <NumberInput
          variant='filled'
          radius={pxToRem('xs')}
          placeholder='Total Cards'
          value={formDefinition?.meta?.totalCards ?? ''}
          w={'100%'}
          hideControls
          onChange={(val) => handleMetaChange('totalCards', val as number)}
        />
        <NumberInput
          variant='filled'
          radius={pxToRem('xs')}
          placeholder='Year'
          value={formDefinition?.meta?.year ?? ''}
          w={'100%'}
          hideControls
          onChange={(val) => handleMetaChange('year', val as number)}
        />
      </Container>
    </>
  );
};
