import * as React from 'react';
import {
  Typography,
  Container,
} from '@mui/material';
import RegisterForm from './components/register-page';

const App: React.FC = () => (
  <Container>
    <Typography variant="h2" component="h1" align="center">Tai yra mano aplikacija</Typography>
    <RegisterForm />
  </Container>
);

export default App;
