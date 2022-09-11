import { Container } from '@mui/material';
import React from 'react';
import EmailInput from '../form-controls/email-input';

const TestPage: React.FC = () => (
  <Container sx={{ mt: 6 }}>
    <EmailInput />
  </Container>
  );

export default TestPage;
