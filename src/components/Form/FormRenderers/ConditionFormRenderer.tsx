import { Flex, TextInput } from '@mantine/core';
import numberClasses from '../../../modules/NumberInput.module.css';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/responsiveSize';
import {
  AttributeDefinition,
  ConditionAttributeDefinition,
} from '../../../api/attribute';
import { ChangeEvent, useState } from 'react';
import { FormRenderer } from '../formRenderer';

const Container = styled(Flex)`
  height: 80%;
  flex-direction: column;
  gap: ${pxToRem('sm')};
`;

const ConditionFormRenderer: FormRenderer = (props) => {
  const [attribute, setAttribute] = useState<
    Partial<ConditionAttributeDefinition>
  >({
    type: 'condition',
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAttribute({ ...attribute, name: event.currentTarget.value });
    props.onChange(attribute as AttributeDefinition);
  };

  return (
    <Container>
      <TextInput
        placeholder='Name'
        value={attribute?.name ?? ''}
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

export default ConditionFormRenderer;
