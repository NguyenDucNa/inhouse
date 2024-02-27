import MenuSelectionInput from '@packages/ui/form/input/menu-selection-input.tsx';
import { useBranchSelectionContext } from '@client/page/management/table-group/table-group-list/component/branch-selection/branch-selection-context.ts';
import { BranchItemFragment } from 'core/src/graphql/types/graphql';

export default function BranchSelection() {
  const { branch, branches, setBranch } = useBranchSelectionContext();
  const emptyBranch : BranchItemFragment[] = [{
    id: "null",
    name: "Not selected",
    address: ""
  }]
  const branchesAddEmpty = branches.concat(emptyBranch);
  
  return (
    <MenuSelectionInput
      title=""
      data={branchesAddEmpty}
      value={branch}
      onChange={setBranch}
      build={(item) => {
        return {
          id: item.id,
          name: item.name,
        };
      }}
      className="-my-2 max-w-64 min-w-32"
    />
  );
}
