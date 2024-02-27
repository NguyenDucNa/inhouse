import { useState } from 'react';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import { useNavigate } from 'react-router-dom';
import { ButtonSize } from '@packages/ui/button/button-size';
import useLocalDeviceCreateQuery from '@packages/local-device-order/create/logic/use-local-device-create-query.ts';
import useLocalDeviceCreateMutation from '@packages/local-device-order/create/logic/use-local-device-create-mutation.ts';
import { useCompanyId } from '@packages/core/company/company-context.ts';
import { captureException } from '@sentry/react';

export default function LocalDeviceOrderCreate() {
  const navigate = useNavigate();
  const branchID = 'default';
  const companyId = useCompanyId();

  const [selectedTableGroup, setSelectedTableGroup] = useState<string | null>();
  const [selectedMenu, setSelectedMenu] = useState<string | null>();
  const [selectedTable, setSelectedTable] = useState<string | null>();
  const [guestCount, setGuestCount] = useState<number>(1);

  const { data } = useLocalDeviceCreateQuery(companyId, branchID);
  const [create] = useLocalDeviceCreateMutation();

  const createCallback = () => {
    if (!selectedMenu || !selectedTable) return;

    create({
      variables: {
        companyId: companyId,
        data: {
          menuId: selectedMenu,
          tableID: selectedTable,
          branchID: branchID,
          customTableName: undefined,
          guestCount: guestCount,
        },
      },
    })
      .then(() => {
        navigate('../continue');
      })
      .catch((error) => {
        captureException(error);
      });
  };

  const menuList = data?.menus;
  const tableGroups = data?.tableGroups ?? [];
  const tables = tableGroups.find(
    (_tableGroup) => _tableGroup.id === selectedTableGroup
  );

  return (
    <div className="flex justify-center items-center min-w-full min-h-screen">
      <div className="bg-white py-12 px-16 rounded-xl">
        <p className="text-3xl mb-6 font-semibold">Create Order</p>
        <div className="mb-6">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            How many
          </label>
          <input
            className="w-96 rounded-md"
            type="text"
            name=""
            id=""
            value={guestCount}
            onChange={(event) => {
              setGuestCount(+event.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Select a table group
          </label>
          <select
            className="w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedTableGroup ?? 'none'}
            onChange={(event) => {
              setSelectedTableGroup(event.target.value);
            }}
          >
            <option value="none" disabled hidden>
              Select an Option
            </option>
            {data?.tableGroups.map((tableGroup) => (
              <option key={tableGroup.id} value={tableGroup.id}>
                {tableGroup.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Select a table
          </label>
          <select
            className="w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedTable ?? 'none'}
            onChange={(event) => {
              setSelectedTable(event.target.value);
            }}
          >
            <option value="none" disabled hidden>
              Select an Option
            </option>
            {tables?.tables.map((table) => (
              <option value={table.id} key={table.id}>
                {table.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-10">
          <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Select a menu
          </label>
          <select
            className="w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedMenu ?? 'none'}
            onChange={(event) => {
              setSelectedMenu(event.target.value);
            }}
          >
            <option value="none" disabled hidden>
              Select an Option
            </option>

            {menuList?.map((menu) => (
              <option value={menu.id} key={menu.id}>
                {menu.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center">
          <PrimaryButton onClick={createCallback} buttonSize={ButtonSize.large}>
            Create a new order
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
