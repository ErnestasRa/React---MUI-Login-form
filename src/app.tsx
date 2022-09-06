import * as React from 'react';
import {
  Typography,
  Container,
} from '@mui/material';
import LoginForm from './components/login-form';

const App: React.FC = () => (
  <Container>
    <Typography variant="h2" component="h1" align="center">Tai yra mano aplikacija</Typography>
    <LoginForm />
  </Container>
);

export default App;
