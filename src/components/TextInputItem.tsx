import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';
import SmallText from './SmallText';
import TextInput from './TextInput';

interface TextInputItemInterface {
    title: string
    type: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledTextInputItem = styled.div<TextInputItemInterface>`
  margin-bottom: 3rem;

  :last-child {
    margin-bottom: 5.5rem;
  }

  input {
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
  }
`;

const TextInputItem: React.FC<TextInputItemInterface> = ({ title, type, onChange }) => (
  <StyledTextInputItem title={title} type={type}>
    <SmallText color={colors.grey}>
      {title}
    </SmallText>
    <TextInput type={type} onChange={onChange} />
  </StyledTextInputItem>
);

export default TextInputItem;
