import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import * as React from 'react';

type CheckboxOption = {
  value: string,
  label: string,
};

type CheckboxGroupProps = {
  label: string,
  name: string,
  options: CheckboxOption[]
};

const CheckboxGroup:React.FC<CheckboxGroupProps> = ({
  label,
  name,
  options,
}) => (
  <Box>
    <FormLabel sx={{ letterSpacing: '0.05em', mb: 1 }}>{label}</FormLabel>
    <FormGroup sx={{ display: 'flex', flexDirection: 'column', px: 2 }}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          control={<Checkbox value={option.value} name={name} />}
          label={option.label}
        />
      ))}
    </FormGroup>
  </Box>
);
export default CheckboxGroup;
