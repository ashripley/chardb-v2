import { InputHTMLAttributes, useId } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../utils';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const StyledNumberField = styled(NumberField)`
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0 auto;

  /* Remove the steppers in WebKit browsers (Chrome, Safari) */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Remove steppers in Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${pxToRem('xxs')};
`;

const Label = styled.label<{ isDisabled: boolean | undefined }>`
  font-family: inherit;
  color: ${({ isDisabled }) => (isDisabled ? '#BFBFBF' : 'inherit')};
`;

export function NumberField(props: Props) {
  const { label } = props;
  const id = useId();

  return (
    <Container>
      <Label isDisabled={props.disabled} htmlFor={id}>
        {label}
      </Label>
      <input type='number' {...props} />
    </Container>
  );
}
