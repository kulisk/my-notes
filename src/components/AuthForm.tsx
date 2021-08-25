import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import { breakpoints, colors } from '../styles/variables';

interface AuthCardInterface {
    title: string
}

const StyledAuthForm = styled.div<AuthCardInterface>`
  .authFormContainer {
    margin: 0 auto;
    padding: 0 0.5rem;
    max-width: 800px;

    @media (max-width: ${breakpoints.m}) {
      max-width: 768px;
    }

    @media (max-width: ${breakpoints.s}) {
      padding: 0;
      margin: 0;
    }
  }

  .card {
    border: 1px solid ${colors.primary};

    @media (max-width: ${breakpoints.s}) {
      border: none;
    }
  }

  .cardHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
    height: 80px;
  }

  .cardBody {
    padding: 10rem 11rem 7rem;

    @media (max-width: ${breakpoints.s}) {
      padding: 7rem 5rem 4rem;
    }

    @media (max-width: ${breakpoints.xs}) {
      padding: 4rem 1rem 1rem;
    }
  }
`;

const AuthForm: React.FC<AuthCardInterface> = ({ children, title }) => (
  <StyledAuthForm title={title}>
    <div className="authFormContainer">
      <div className="card">
        <div className="cardHeader">
          <Heading>{title}</Heading>
        </div>
        <div className="cardBody">
          {children}
        </div>
      </div>
    </div>
  </StyledAuthForm>
);

export default AuthForm;
