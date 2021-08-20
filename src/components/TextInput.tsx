import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

interface TextInputInterface {
    type: string
    style?: React.CSSProperties
    defaultValue?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const StyledTextInput = styled.input<TextInputInterface>`
    border: 0.1rem solid ${colors.primaryLight};
    border-radius: 0.3rem;
    width: 100%;
    height: 40px;
    font-size: 2.4rem;
    font-weight: 500;
    color: #000;
    transition: 0.2s linear all;

    &:focus {
        border: 0.1rem solid ${colors.primary};
    }
`;

const TextInput: React.FC<TextInputInterface> = ({
  type,
  style,
  value,
  defaultValue,
  onChange,
  onKeyUp,
}) => (
  <StyledTextInput
    style={style}
    type={type}
    value={value}
    defaultValue={defaultValue}
    onChange={onChange}
    onKeyUp={onKeyUp}
  />
);

export default TextInput;
