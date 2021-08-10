import React, { ChangeEvent, ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

interface TextAreaInterface {
    style?: React.CSSProperties
    value?: string
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const StyledTextArea = styled.textarea<TextAreaInterface>`
  border: 0.1rem solid ${colors.primaryLight};
  border-radius: 0.3rem;
  width: 100%;
  height: 200px;
  font-size: 2.4rem;
  font-weight: 500;
  color: #000;
  transition: 0.2s linear all;
  resize: none;

  &:focus {
    border: 0.1rem solid ${colors.primary}
  }
`;

const TextArea: React.FC<TextAreaInterface> = ({
  style,
  value,
  onChange,
}) => (
  <StyledTextArea style={style} defaultValue={value} onChange={onChange} />
);

export default TextArea;
