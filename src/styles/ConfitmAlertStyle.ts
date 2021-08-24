import styled from 'styled-components';
import { colors } from './variables';

export const StyledConfirmAlert = styled.div`
  width: 320px;

  .titleContainer {
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: ${colors.primary};
    border: 0.1rem solid ${colors.primary};
    border-bottom: none;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
  
  .buttonsContainer {
    display: flex;
    justify-content: flex-end;
    padding: 2rem 1rem 1.5rem;
    border: 0.1rem solid ${colors.primary};
    border-top: none;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;

    button {
      padding: 0.7rem 1.5rem;
      margin-right: 1rem;
      outline: none;
      border: 0.1rem solid ${colors.lightGrey};
      border-radius: 0.3rem;
      background-color: #fff;

      &:first-child {
        background-color: ${colors.primary};
        color: #fff;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
