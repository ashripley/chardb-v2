import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const buttonStyles = css<Props>`
  font-family: inherit;
  background-image: none;
  background-clip: padding-box;
  display: block;
  border-radius: ${pxToRem('xxs')};
  padding: 0.5rem;
  box-sizing: border-box;
  border: none;
  flex-shrink: 0;
  cursor: pointer;

  &::placeholder {
    color: rgb(282 282 282);
  }

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  ${buttonStyles}
`;

export function Button(props: Props) {
  return <button {...props} />;
}
