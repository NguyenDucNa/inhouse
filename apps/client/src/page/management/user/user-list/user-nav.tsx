import MenuSelectionInput from '@packages/ui/form/input/menu-selection-input.tsx';
import { useState } from 'react';
import UserList from '@client/page/management/user/user-list/user-list';
interface UserType {
  key: boolean | null;
  name: string;
}
const chooseUser: UserType[] = [
  {
    key: null,
    name: 'All User',
  },
  {
    key: true,
    name: 'Active',
  },
  {
    key: false,
    name: 'Non Active',
  },
];
export default function UserNav({
  itemsPerPage,
  buttonCount,
}: {
  itemsPerPage: number;
  buttonCount: number;
}) {
  const [userType, setUserType] = useState<UserType>(chooseUser[0]);
  return (
    <div>
      <MenuSelectionInput
        title="User Filter"
        data={chooseUser}
        value={userType}
        onChange={setUserType}
        build={(item) => {
          return {
            id: item.name,
            name: item.name,
          };
        }}
        className="mt-2 mb-4 w-48"
      />
      <UserList
        itemsPerPage={itemsPerPage}
        buttonCount={buttonCount}
        state={userType.key}
      />
    </div>
  );
}
