import React, { useCallback, useRef, useState } from 'react';

export interface SelectionTableDataSource<T> {
  checkboxRef?: React.RefObject<HTMLInputElement>;

  checked: boolean;
  setChecked: (value: boolean) => void;

  indeterminate: boolean;
  setIndeterminate: (value: boolean) => void;

  selected: Set<T>;
  setSelected: (value: Set<T>) => void;

  toggleAll: () => void;

  editingMode: boolean;
}

export function useSelectionTableDataSource<T>(
  data: readonly T[]
): SelectionTableDataSource<T> {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [selected, setSelected] = useState<Set<T>>(new Set());

  const toggleAll = useCallback(() => {
    if (checked || indeterminate) {
      setSelected(new Set([]));
    } else {
      setSelected(new Set(data));
    }
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }, [checked, data, indeterminate]);

  return {
    checkboxRef,
    checked,
    setChecked,
    selected,
    setSelected,
    indeterminate,
    setIndeterminate,
    toggleAll,
    editingMode: checked || indeterminate,
  };
}
