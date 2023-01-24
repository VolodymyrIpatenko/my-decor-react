import { useState } from 'react';

export default function useToggle(defaultValue) {
  const [value, setValue] = useState((defaultValue = false));

  return [
    value,
    {
      toggle: () => setValue(state => !state),
    },
  ];
}
