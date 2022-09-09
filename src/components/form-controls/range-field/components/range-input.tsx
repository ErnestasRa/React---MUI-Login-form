import * as React from 'react';

import {
  FilledInput,
  FilledInputProps,
} from '@mui/material';

type RangeInputProps = Omit<FilledInputProps, 'size' | 'type' | 'onChange' | 'multiline' | 'value'> & {
  value: number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>, val: number) => void,
};

// TODO: Kviesti onChange prop'są tik tuomet, kai įvyksta eventas "onBlur"
const RangeInput: React.FC<RangeInputProps> = ({
  onChange,
  value,
  sx = [],
  ...props
}) => {
  const [privateValue, setPrivateValue] = React.useState(value);

  React.useEffect(() => setPrivateValue(value), [value]);

 return (
   <FilledInput
     type="number"
     size="small"
     multiline={false}
     sx={[
      {
        flexGrow: 1,
        input: {
          textAlign: 'center',
          pt: 1,
        },
      },
      ...(sx instanceof Array ? sx : [sx]),
    ]}
     value={privateValue}
     onChange={(e) => setPrivateValue(Number(e.target.value))}
     onBlur={(e) => onChange(e as React.FocusEvent<HTMLInputElement>, Number(e.target.value))}
     {...props}
   />
);
  };
export default RangeInput;
