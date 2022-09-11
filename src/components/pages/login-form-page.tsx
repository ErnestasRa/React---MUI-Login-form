import {
    Box,
    Button,
    FormControlLabel,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import CustomSizeCheckbox from '../form-controls/checkbox/custom-size-checkbox';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Siunciami duomenys');
        console.log({
            username,
            password,
            checked,
        });
    };

    return (
      <Box sx={{
            height: '100vh',
            display: 'grid',
            placeItems: 'center',
            backgroundColor: 'lightgreen',
           }}
      >
        <Paper
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: 400,
            p: 4,
            }}
          elevation={10}
          onSubmit={handleSubmit}
        >
          <SecurityIcon sx={{ fontSize: 50, alignSelf: 'center' }} />
          <Typography component="h1" variant="h3" align="center">Login Form</Typography>
          <TextField
            type="email"
            variant="filled"
            value={username}
            onChange={((e) => setUsername(e.target.value))}
            label="Email: "
          />
          <TextField
            type="password"
            variant="filled"
            value={password}
            onChange={((e) => setPassword(e.target.value))}
            label="Password: "
          />
          <FormControlLabel
            control={(
              <CustomSizeCheckbox
                checked={checked}
                onChange={handleChange}
              />
            )}
            label="Isiminti"
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ height: 60 }}
          >
            Prisijungti

          </Button>
        </Paper>
      </Box>
  );
};
export default LoginForm;
