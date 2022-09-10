import * as React from 'react';
import {
  Box,
  Typography,
  Slider,
} from '@mui/material';
import { RangeInput, InputContainer, RangeInputProps } from './components';

type RangeFieldProps = {
  min?: number,
  max?: number
};

type Range = [number, number];

const orderByRange = (range: Range) => range.sort((a, b) => a - b) as Range;

const RangeField: React.FC<RangeFieldProps> = ({
  min = 0,
  max = 100,
}) => {
  const [privateValue, setPrivateValue] = React.useState<Range>([min, max]);
  const [privateMinValue, privateMaxValue] = privateValue;

  const valueInRange = (newValue: number) => newValue <= max && newValue >= min;

  const handleMinValueChange: RangeInputProps['onChange'] = (e, newMinValue) => {
    // TODO: nustatyti reikšmę tik tuomet, jeigu ji nėra mažesnė už props'ą - min
    if (valueInRange(newMinValue)) {
      setPrivateValue(orderByRange([newMinValue, privateMaxValue]));
    }
  };

  const handleMaxValueChange: RangeInputProps['onChange'] = (e, newMaxValue) => {
    // TODO: nustatyti reikšmę tik tuomet, jeigu ji nėra didesnė už props'ą - max
    if (valueInRange(newMaxValue)) {
      setPrivateValue(orderByRange([newMaxValue, privateMinValue]));
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <InputContainer>
        <RangeInput
          newValueIsvalid={valueInRange}
          value={privateMinValue}
          onChange={handleMinValueChange}
        />
        <Typography>iki</Typography>
        <RangeInput
          newValueIsvalid={valueInRange}
          value={privateMaxValue}
          onChange={handleMaxValueChange}
        />
      </InputContainer>
      <Box sx={{ mx: 3 }}>
        <Slider value={privateValue} min={min} max={max} />
      </Box>
    </Box>
  );
};

export default RangeField;
