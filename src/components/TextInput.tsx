import React from 'react';
import styled from "styled-components";
import {colors} from "../styles/variables";
import SmallText from "./SmallText";

interface TextInputInterface {
    title: string
    type: string
}

const StyledTextInput = styled.div<TextInputInterface>`
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

    &:focus {
      border: 0.1rem solid ${colors.primary}
    }
  }
`

const TextInput: React.FC<TextInputInterface> = ({title, type}) => {
    return (
        <StyledTextInput title={title} type={type}>
            <SmallText color={colors.grey}>
                {title}
            </SmallText>
            <input type={type}/>
        </StyledTextInput>
    );
};

export default TextInput;