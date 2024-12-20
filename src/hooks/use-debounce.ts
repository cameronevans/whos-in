// usehooks-ts.com/react-hook/use-debounce

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useDebounce = <T>(
  defaultValue: T,
  delay?: number
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(defaultValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    if (value !== debouncedValue) {
      const timeout = setTimeout(() => setDebouncedValue(value), delay || 150);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [debouncedValue, value, delay]);

  return [debouncedValue, setValue];
};
