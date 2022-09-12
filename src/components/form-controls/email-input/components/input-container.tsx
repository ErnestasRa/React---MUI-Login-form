import {
    Box,
    styled,
  } from '@mui/material';

  const FormContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(4),
    alignItems: 'center',
    margin: theme.spacing(0, 2, 2),
    flexDirection: 'column',
  }));

  export default FormContainer;
