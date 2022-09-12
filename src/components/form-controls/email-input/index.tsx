import * as React from 'react';

import {
    Box,
    Button,
    TextField,
    FormControl,
} from '@mui/material';

import FormContainer from './components/input-container';
import PasswordValidator from './validators/password-validator';
import EmailValidator from './validators/email-validator';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const EmailInput: React.FC = () => {
const [form, setForm] = React.useState({
    Email: '',
    Password: '',
});

const handleChange = (e:ChangeEvent) => {
    const nextFormState = {
        ...form,
        [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
};

const handleSubmit = () => {
    if (!EmailValidator(form.Email) || !PasswordValidator(form.Password)) {
      console.log('no');
    }
};

    return (
      <form>
        <FormControl>
          <FormContainer sx={{ display: 'flex', alignItems: 'center' }}>
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
              error={form.Password.length < 8}
              type="password"
            />
            <Box>
              <Button
                onClick={handleSubmit}
              >
                Submit

              </Button>
            </Box>
          </FormContainer>
        </FormControl>
      </form>

  );
};
export default EmailInput;
