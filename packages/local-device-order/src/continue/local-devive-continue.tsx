import { useNavigate } from 'react-router-dom';
import useLocalDeviceIncompletedOrder from '@packages/local-device-order/continue/logic/use-local-device-incompleted-order.ts';

export default function LocalDeviceList() {
  const navigate = useNavigate();
  const { data } = useLocalDeviceIncompletedOrder();
  return (
    <div className="p-16">
      <p className="text-3xl mb-6 font-semibold">Local Order Device</p>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-2 border-gray-200 shadow-md">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Place
            </th>

            <th scope="col" className="px-6 py-3">
              Table
            </th>
            <th scope="col" className="px-6 py-3">
              Guests count
            </th>
            <th scope="col" className="px-6 py-3">
              State
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.localDeviceIncompletedOrders.map((order) => (
            <tr
              key={order.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200"
              onClick={() => {
                navigate(`../order/${order.id}`);
              }}
            >
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {order.tableOrder?.table?.tableGroup.name ?? 'Unknown'}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {order.tableOrder?.table?.name ??
                  order.tableOrder?.customTableName ??
                  'Unknown'}
              </th>
              <td className="px-6 py-4">{order.data.guests.length}</td>
              <td className="px-6 py-4">{order.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
