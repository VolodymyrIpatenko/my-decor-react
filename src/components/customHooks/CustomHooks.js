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
