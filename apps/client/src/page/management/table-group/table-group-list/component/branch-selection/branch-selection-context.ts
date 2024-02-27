import { createContext, useContext, useEffect, useState } from 'react';
import { BranchItemFragment } from '@client/graphql/types/graphql.ts';
import { useBranchList } from '@client/page/management/branch/branch-list/logic/use-branch-list.tsx';
import { getFragmentData } from '@client/graphql/types';
import { BranchFragment } from '@client/graphql/branch-fragment.ts';

interface BranchContextType {
  branch: BranchItemFragment | null;
  setBranch: (branch: BranchItemFragment) => void;
  branches: BranchItemFragment[];
}

export function useBranchSelectionContext() {
  const context = useContext(BranchSelectionContext);
  if (!context) {
    throw new Error(
      'useBranchContext must be used within a BranchContext.Provider'
    );
  }
  return context;
}

export function useBranchSelectionProvider(): BranchContextType {
  const [branch, setBranch] = useState<BranchItemFragment | null>(null);

  // Fetch data
  const { data } = useBranchList();
  const branches =
    data?.branches.map((branch) => getFragmentData(BranchFragment, branch)) ??
    [];

  useEffect(() => {
    const branches = data?.branches.map((branch) =>
      getFragmentData(BranchFragment, branch)
    );

    if (!branches || branches.length === 0) {
      return;
    }

    const prevSelectedBranchId = localStorage.getItem('selectedBranch');
    if (prevSelectedBranchId) {
      // Search branch by id
      const branch = branches.find(
        (branch) => branch.id === prevSelectedBranchId
      );
      if (branch) {
        setBranch(branch);
        return;
      }
    }

    setBranch(branches[0]);
    return;
  }, [data]);

  return {
    branch,
    branches,
    setBranch: (branch) => {
      localStorage.setItem('selectedBranch', branch.id);
      setBranch(branch);
    },
  };
}

export const BranchSelectionContext = createContext<BranchContextType | null>(
  null
);
