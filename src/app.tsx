import * as React from 'react';
import {
  Typography,
  Container,
  Box,
} from '@mui/material';
import ButtonExample from './components/button-example';
import CardExample from './components/card-example';
import LoginForm from './components/login-form';

const App: React.FC = () => (
  <Container>
    <Typography variant="h2" component="h1" align="center">Tai yra mano aplikacija</Typography>
    <Box sx={{ display: 'flex', gap: 8, mt: 8 }}>
        <LoginForm />
    </Box>
  </Container>
);

export default App;
