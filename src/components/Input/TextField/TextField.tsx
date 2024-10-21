import { InputHTMLAttributes, useId } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../utils';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const StyledTextField = styled(TextField)`
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0 auto;
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

export function TextField(props: Props) {
  const { label } = props;
  const id = useId();

  return (
    <Container>
      <Label isDisabled={props.disabled} htmlFor={id}>
        {label}
      </Label>
      <input type='text' {...props} />
    </Container>
  );
}
