import styled from 'styled-components';
import { pxToRem } from '../../../../utils';
import { ChangeEvent } from 'react';
import { FormRenderer } from '../../formRenderer';

const Container = styled(Flex)`
  height: 80%;
  flex-direction: column;
  gap: ${pxToRem('sm')};
`;

export const ConditionFormRenderer: FormRenderer = (props) => {
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
        value={formDefinition?.name ?? ''}
        radius={pxToRem('xs')}
        w={'100%'}
        rightSection
        variant='filled'
        onChange={onChange}
      />
    </Container>
  );
};
