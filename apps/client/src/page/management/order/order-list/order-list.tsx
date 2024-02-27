import { useState } from 'react';
import Card from '@packages/ui/card/card.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import Pagination from '@packages/core/utils/paginition';
import CardHeader from '@packages/ui/card/card-header.tsx';
import useOrders from './logic/use-orders.ts';
import OrderTable from './components/orders-table';
import useOrdersCount from './logic/use-order-count';

const formatPlace = (input: {
  tableGroup?: string;
  table?: string;
  customName?: string | null;
}) => {
  if (input.customName) {
    return input.customName;
  }
  if (input.tableGroup && input.table) {
    return `${input.tableGroup} - ${input.table}`;
  }
  return 'N/A';
};

export default function OrderList({
  itemsPerPage,
  buttonCount,
  state,
}: {
  itemsPerPage: number;
  buttonCount: number;
  state: string | undefined;
}) {
  const [pageStart, setPageStart] = useState<number>(0);

  const choosePage = ({ start }: { start: number }) => {
    const newPage: number = start;
    setPageStart(newPage);
  };

  const { data: quantityData } = useOrdersCount({ state });
  const { data } = useOrders(pageStart, itemsPerPage, { state });

  return (
    <Card>
      <CardHeader title={'Orders'} />

      <CardContent>
        <OrderTable
          items={
            data?.orders.map((order) => ({
              id: order.id,
              place: formatPlace({
                tableGroup: order.tableOrder?.table?.tableGroup.name,
                table: order.tableOrder?.table?.name,
                customName: order.tableOrder?.customTableName,
              }),
              state: order.state,
              guestCount: order.data.guests.length,
            })) ?? []
          }
        />
      </CardContent>

      <CardContent>
        <Pagination
          buttonCount={buttonCount}
          listLength={quantityData?.ordersCount ?? 0}
          itemPerPage={itemsPerPage}
          choosePage={choosePage}
        />
      </CardContent>
    </Card>
  );
}
