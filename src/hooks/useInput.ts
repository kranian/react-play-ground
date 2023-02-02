import React, { Dispatch, useCallback, useState } from 'react';

type ReturnTypes<T> = [T, (e: any) => void, Dispatch<React.SetStateAction<T>>];

const useInput = <T>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e:any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
