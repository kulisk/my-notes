import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Heading from './Heading';
import { colors } from '../styles/variables';

interface AuthCardInterface {
    title: string
}

const AuthForm: React.FC<AuthCardInterface> = ({ children, title }) => (
  <Container style={{ maxWidth: '740px' }}>
    <Card style={{ border: `1px solid ${colors.primary}` }}>
      <Card.Header className="color-primary" style={{ textAlign: 'center' }}>
        <Heading>{title}</Heading>
      </Card.Header>
      <Card.Body style={{ padding: '10rem 11rem 7rem' }}>
        {children}
      </Card.Body>
    </Card>
  </Container>
);

export default AuthForm;
