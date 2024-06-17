import { Flex, TextInput } from '@mantine/core';
import numberClasses from '../../../../modules/NumberInput.module.css';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../../utils/responsiveSize';
import { FormRenderer } from '../../formRenderer';
import { validateAttributeDefinition } from '../../../../api/attribute';

const Container = styled(Flex)`
  height: 80%;
  flex-direction: column;
  gap: ${pxToRem('sm')};
`;

export const CardTypeFormRenderer: FormRenderer = (props) => {
  validateAttributeDefinition(props.formDefinition);

  const { formDefinition, type } = props;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange({
      ...formDefinition,
      type,
      name: event.currentTarget.value,
    });
  };

  return (
    <Container>
      <TextInput
        placeholder='Name'
        value={formDefinition?.name || ''}
        radius={'lg'}
        w={'100%'}
        rightSection
        variant='filled'
        classNames={{ input: numberClasses.input }}
        onChange={onChange}
      />
    </Container>
  );
};
