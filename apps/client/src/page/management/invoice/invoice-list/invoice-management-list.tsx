import { useState } from 'react';
import Card from '@packages/ui/card/card.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import Pagination from '@packages/core/utils/paginition';
import CardHeader from '@packages/ui/card/card-header.tsx';
import { InvoiceFragment } from '@client/graphql/invoice-fragment.ts';
import { getFragmentData } from '@client/graphql/types/fragment-masking.ts';
import BranchSelectionProvider from '../../table-group/table-group-list/component/branch-selection/branch-selection-provider.tsx';
import BranchSelection from '../../table-group/table-group-list/component/branch-selection/branch-selection.tsx';
import { useBranchSelectionContext } from '../../table-group/table-group-list/component/branch-selection/branch-selection-context.ts';
import useGetInvoicesByBranch from './logic/use-get-invoices-by-branch.ts';
import InvoiceTable from './component/invoice-table.tsx';
import useInvoiceCount from './logic/use-invoice-count.ts';

export default function InvoiceManagementList({
  itemsPerPage,
  buttonCount,
}: {
  itemsPerPage: number;
  buttonCount: number;
}) {
  return (
    <BranchSelectionProvider>
      <div className="flex flex-col space-y-6">
        <BranchSelection />
        <Content itemsPerPage={itemsPerPage} buttonCount={buttonCount} />
      </div>
    </BranchSelectionProvider>
  );
}

export function Content({
  itemsPerPage,
  buttonCount,
}: {
  itemsPerPage: number;
  buttonCount: number;
}) {
  const { branch } = useBranchSelectionContext();
  const [pageStart, setPageStart] = useState<number>(0);

  const { data } = useGetInvoicesByBranch(branch?.id ?? "null", pageStart, itemsPerPage);
  const { data: quantityData } = useInvoiceCount(branch?.id ?? "null");

  const choosePage = ({ start }: { start: number }) => {
    const newPage: number = start;
    setPageStart(newPage);
  };


  return (
    <Card>
      <CardHeader title={'Invoices'} />

      <CardContent>
        <InvoiceTable
          items={data?.invoicesByBranch.map((invoice) =>
            getFragmentData(InvoiceFragment, invoice)
          )}
        />
      </CardContent>

      <CardContent>
        <Pagination
          buttonCount={buttonCount}
          listLength={quantityData?.invoiceCount ?? 0}
          itemPerPage={itemsPerPage}
          choosePage={choosePage}
        />
      </CardContent>
    </Card>
  );
}
