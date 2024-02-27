import { ChangeEvent, useCallback, useState } from 'react';

export default function useFormData<T>(initial: T) {
  const [data, setData] = useState<T>(initial);

  const handle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    [setData]
  );

  const manualHandle = useCallback(
    (name: string, value: unknown) => {
      setData((prev) => ({ ...prev, [name]: value }));
    },
    [setData]
  );

  return {
    data,
    setData,
    handle,
    manualHandle,
  };
}
