import { useCallback, useState } from 'react';
import { produce } from 'immer';

export interface LayoutTable {
  id: string;
  name: string;
  seats: number;

  position: {
    x: number;
    y: number;
  };

  enabled: boolean;
}

export interface TableLayoutController {
  tables: Map<string, LayoutTable>;

  updateEnabled: (id: string, value: boolean) => void;
  updatePosition: (id: string, position: { x: number; y: number }) => void;
  updateTables: (tables: LayoutTable[]) => void;
}

export const useTableLayoutController = (): TableLayoutController => {
  const [tables, setTables] = useState<Map<string, LayoutTable>>(new Map());

  const updateTables = useCallback((tables: LayoutTable[]) => {
    setTables(new Map(tables.map((table) => [table.id, table])));
  }, []);

  const updateEnabled = useCallback(
    (id: string, value: boolean) => {
      const nextState = produce(tables, (draft) => {
        const table = draft.get(id);
        if (table) {
          table.enabled = value;
        }
      });
      setTables(nextState);
    },
    [tables]
  );

  const updatePosition = useCallback(
    (id: string, position: { x: number; y: number }) => {
      const nextState = produce(tables, (draft) => {
        const table = draft.get(id);
        if (table) {
          table.position = position;
        }
      });
      setTables(nextState);
    },
    [tables]
  );
 

  return {
    tables: tables,
    updateEnabled: updateEnabled,
    updatePosition: updatePosition,
    updateTables: updateTables,
  };
};
