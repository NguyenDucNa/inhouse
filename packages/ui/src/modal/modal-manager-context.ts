import React, { createContext, useCallback, useContext, useState } from 'react';

export type DialogBuilder = (onClose: () => void) => React.ReactNode;

export interface ModalManager {
  dialog: React.ReactNode;

  showDialog: (build: DialogBuilder) => void;

  closeDialog: () => void;
}

export const ModalManagerContext = createContext<ModalManager | undefined>(
  undefined
);

export function useModalManagerContext(): ModalManager {
  const context = useContext(ModalManagerContext);

  if (context === undefined) {
    throw new Error(
      'useModalManagerContext must be used within a ModalManagerContextProvider'
    );
  }

  return context;
}

export function useModalManager(): ModalManager {
  const [dialog, setDialog] = useState<React.ReactNode | null>(null);

  const closeDialog = useCallback(() => {
    setDialog(null);
  }, []);

  const showDialog = useCallback(
    (build: DialogBuilder) => {
      const alertNode = build(closeDialog);
      setDialog(alertNode);
    },
    [setDialog, closeDialog]
  );

  return {
    dialog,
    showDialog,
    closeDialog,
  };
}
