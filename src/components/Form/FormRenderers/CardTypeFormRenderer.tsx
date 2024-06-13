import { Flex, TextInput } from '@mantine/core';
import numberClasses from '../../../modules/NumberInput.module.css';
import {
  AttributeDefinition,
  CardTypeAttributeDefinition,
} from '../../../api/attribute';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/responsiveSize';
import { FormRenderer } from '../formRenderer';

const Container = styled(Flex)`
  height: 80%;
  flex-direction: column;
  gap: ${pxToRem('sm')};
`;

const CardTypeFormRenderer: FormRenderer = (props) => {
  const [attribute, setAttribute] = useState<
    Partial<CardTypeAttributeDefinition>
  >({ type: 'cardType' });

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

export default CardTypeFormRenderer;
