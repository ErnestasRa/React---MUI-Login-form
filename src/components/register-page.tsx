import {
    Box,
    Button,
    Paper,
    TextField,
    Typography,
    Autocomplete,
} from '@mui/material';
import React from 'react';
import SecurityIcon from '@mui/icons-material/Security';

type Topic = {
  id: string,
  title: string,
};

const topics: Topic[] = [
  { id: '1', title: 'HTML' },
  { id: '2', title: 'HTML' },
  { id: '3', title: 'JS' },
  { id: '4', title: 'DOM' },
  { id: '5', title: 'Typescript' },
  { id: '6', title: 'Webpack' },
  { id: '7', title: 'Git' },
  { id: '8', title: 'React' },
  { id: '9', title: 'Node' },
  { id: '10', title: 'Express' },
  { id: '11', title: 'SQL' },
  { id: '12', title: 'MongoDB' },
];

const RegisterForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [selectedTopics, setSelectedTopics] = React.useState<Topic[]>([]);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Siunciami duomenys');
        console.log({
            username,
            password,
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
          <Typography component="h1" variant="h3" align="center">Registracija</Typography>
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
          <Autocomplete
            options={topics}
            multiple
            getOptionLabel={({ title }) => title}
            value={selectedTopics}
            onChange={(_, newSelectedTopics) => setSelectedTopics(newSelectedTopics)}
            renderInput={(inputProps) => (
              <TextField
                label="Dominancios temos: "
                variant="filled"
                {...inputProps}
              />
            )}

          />

          <Button
            type="submit"
            variant="contained"
            sx={{ height: 60 }}
          >
            Registruotis

          </Button>
        </Paper>
      </Box>
  );
};
export default RegisterForm;