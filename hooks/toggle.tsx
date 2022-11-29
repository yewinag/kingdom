import { useCallback, useState } from 'react';

export const useToggle = (
  initialState = false
): [
  state: boolean,
  toggle: {
    toggle: () => void;
    setToggle: (state: boolean) => void;
  }
] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback(() => setState(state => !state), []);
  const setToggle = useCallback((value: boolean) => setState(value), []);

  return [state, { toggle, setToggle }];
};
