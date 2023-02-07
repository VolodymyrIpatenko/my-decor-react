import { useState } from 'react';

export const useToggle = defaultValue => {
  const [value, setValue] = useState((defaultValue = false));

  return [
    value,
    {
      toggle: () => setValue(state => !state),
    },
  ];
};

export const useInput = defaultValue => {
  const [value, setValue] = useState((defaultValue = ''));

  const handleValue = e => {
    setValue(e.targetTarget.value);
  };

  return [value, setValue, handleValue];
};
