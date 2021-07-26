import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

interface TextInputInterface {
    type: string
    style?: React.CSSProperties
    value?: string
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
    border: 0.1rem solid ${colors.primary}
  }
`;

const TextInput: React.FC<TextInputInterface> = ({
  type,
  style,
  value,
}) => (
  <StyledTextInput style={style} type={type} defaultValue={value} />
);

export default TextInput;
