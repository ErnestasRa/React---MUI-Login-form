import * as React from 'react';

import {
  FilledInput,
  FilledInputProps,
} from '@mui/material';

export type RangeInputProps = Omit<FilledInputProps, 'size' | 'type' | 'onChange' | 'multiline' | 'value'> & {
  value: number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>, val: number) => void,
  newValueIsvalid: (newVal:number) => boolean
};

// TODO: Kviesti onChange prop'są tik tuomet, kai įvyksta eventas "onBlur"
const RangeInput: React.FC<RangeInputProps> = ({
  onChange,
  value,
  newValueIsvalid,
  sx = [],
  ...props
}) => {
  const [privateValue, setPrivateValue] = React.useState(value);

  const handleBlur:React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement > = (e) => {
    const newValue = Number(e.target.value);
    const newValueIsValid = newValueIsvalid(newValue);
    if (newValueIsValid) {
       onChange(e as React.FocusEvent<HTMLInputElement>, Number(e.target.value));
      } else {
        setPrivateValue(value);
      }
  };

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
     onBlur={handleBlur}
     {...props}
   />
);
  };
export default RangeInput;
