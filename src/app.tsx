import * as React from 'react';
import {
  Typography,
  Container,
} from '@mui/material';
import TestPage from './components/pages/test-page';

const App: React.FC = () => (
  <Container>
    <Typography variant="h2" component="h1" align="center">Tai yra mano aplikacija</Typography>
    <TestPage />
  </Container>
);

export default App;
