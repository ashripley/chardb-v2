import { InputHTMLAttributes, useId } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../utils';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const StyledCheckbox = styled(Checkbox)`
  height: 24px;
  width: 24px;
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

export function Checkbox(props: Props) {
  const { label } = props;
  const id = useId();
  return (
    <Container>
      <Label isDisabled={props.disabled} htmlFor={id}>
        {label}
      </Label>
      <input type='checkbox' {...props} />
    </Container>
  );
}
