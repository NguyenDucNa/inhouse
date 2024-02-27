import {
  BranchSelectionContext,
  useBranchSelectionProvider,
} from '@client/page/management/table-group/table-group-list/component/branch-selection/branch-selection-context.ts';
import { ReactNode } from 'react';

export default function BranchSelectionProvider(props: {
  children?: ReactNode;
}) {
  const branch = useBranchSelectionProvider();

  return (
    <BranchSelectionContext.Provider value={branch}>
      {props.children}
    </BranchSelectionContext.Provider>
  );
}
