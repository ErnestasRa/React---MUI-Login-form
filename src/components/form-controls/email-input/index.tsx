import * as React from 'react';

import {
    Box,
    Button,
    TextField,
    FormControl,
} from '@mui/material';

import EmailContainer from './components/input-container';
import EmailValidator from './validators/email-validator';

const EmailInput: React.FC = () => {
const [form, setForm] = React.useState({
    Email: '',
    Password: '',
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextFormState = {
        ...form,
        [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
};

const handleSubmit = () => {
    if (form.Email === '' || form.Password === '') {
        throw new Error('cannot be empty');
    } else {
        console.log('tinka');
    }
};

    return (
      <FormControl>
        <EmailContainer>
          <TextField
            name="Email"
            id="filled-basic"
            label="Email"
            variant="filled"
            required
            value={form.Email}
            onChange={handleChange}
          />
          <TextField
            name="Password"
            id="filled-basic"
            label="Password"
            variant="filled"
            required
            value={form.Password}
            onChange={handleChange}
          />
          <Box>
            <Button
              onClick={handleSubmit}
            >
              Submit

            </Button>
          </Box>
        </EmailContainer>
      </FormControl>

  );
};
export default EmailInput;
