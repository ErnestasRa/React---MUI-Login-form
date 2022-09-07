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
  options: CheckboxOption[],
  value?: CheckboxOption[],
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value:CheckboxOption[]) => void
};

type MutatedOptions = (currentValue: CheckboxOption[], checkboxValue: string) => CheckboxOption[];

const CheckboxGroup:React.FC<CheckboxGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
}) => {
  const selectedValues = value && value.map((x) => x.value);

  const createAppendedValue: MutatedOptions = (currentValue, checkboxValue) => {
    const copy = [...currentValue];
    const newOption = options.find((x) => x.value === checkboxValue);
    if (newOption === undefined) {
      throw new Error('selected checkbox is not found in Options ');
    } else {
      copy.push(newOption);
    }
    return copy;
  };

  const createReducedValue: MutatedOptions = (currentValue, checkboxValue) => currentValue
  .filter((x) => x.value !== checkboxValue);

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    checkboxValue: string,
) => {
    const componentIsControlled = value && onChange;

    if (componentIsControlled) {
      const newValue: CheckboxOption[] = checked
       ? createAppendedValue(value, checkboxValue)
       : createReducedValue(value, checkboxValue);

      onChange(event, newValue);
    } else {
      // component uncontrolled
    }
  };

 return (
   <Box>
     <FormLabel sx={{ letterSpacing: '0.05em', mb: 1 }}>{label}</FormLabel>
     <FormGroup sx={{ display: 'flex', flexDirection: 'column', px: 2 }}>
       {options.map((option) => (
         <FormControlLabel
           key={option.value}
           control={(
             <Checkbox
               value={option.value}
               name={name}
               onChange={(event, newChecked) => handleRadioChange(event, newChecked, option.value)}
               checked={selectedValues?.includes(option.value)}
             />
        )}
           label={option.label}
         />
          ))}
     </FormGroup>
   </Box>
  );
};

export default CheckboxGroup;
