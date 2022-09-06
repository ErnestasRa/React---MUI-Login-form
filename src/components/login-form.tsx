import {
    Box,
    Button,
    FormControlLabel,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import LargeCheckBox from './custom-size-checkbox';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
      <Box sx={{
            height: '100vh',
            display: 'grid',
            placeItems: 'center',
           }}
      >
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: 400,
            p: 4,
            }}
          elevation={10}
        >
          <SecurityIcon sx={{ fontSize: 50, alignSelf: 'center' }} />
          <Typography component="h1" variant="h3" align="center">Login Form</Typography>
          <TextField
            variant="filled"
            value={username}
            onChange={((e) => setUsername(e.target.value))}
            label="Username: "
          />
          <TextField
            variant="filled"
            label="Password: "
            value={password}
            onChange={((e) => setPassword(e.target.value))}
          />
          <FormControlLabel
            control={(<LargeCheckBox checked={checked} onChange={handleChange} />)}
            label="Isiminti"
          />

          <Button variant="contained" sx={{ height: 60 }}>Prisijungti</Button>
        </Paper>
      </Box>
  );
};
export default LoginForm;
