import MenuSelectionInput from '@packages/ui/form/input/menu-selection-input.tsx';
import { useState } from 'react';
import OrderList from './order-list';
interface OrderType {
  id: string;
  state: string | undefined;
  name: string;
}

const chooseOrder: OrderType[] = [
  {
    id: 'all',
    state: undefined,
    name: 'All Orders',
  },
  {
    id: 'servicing',
    state: 'servicing',
    name: 'Servicing Orders',
  },
  {
    id: 'orderReview',
    state: 'orderReview',
    name: 'Completed Orders',
  },
];

export default function OrderTab({
  itemsPerPage,
  buttonCount,
}: {
  itemsPerPage: number;
  buttonCount: number;
}) {
  const [orderType, setOrderType] = useState<OrderType>(chooseOrder[0]);
  return (
    <div>
      <MenuSelectionInput
        title="Orders Filter"
        data={chooseOrder}
        value={orderType}
        onChange={setOrderType}
        build={(item) => {
          return {
            id: item.id,
            name: item.name,
          };
        }}
        className="mt-2 mb-4 w-48"
      />

      <OrderList
        itemsPerPage={itemsPerPage}
        buttonCount={buttonCount}
        state={orderType.state}
      />
    </div>
  );
}
