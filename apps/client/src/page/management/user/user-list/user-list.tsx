import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardHeader from 'ui/src/card/card-header';
import Card from '@packages/ui/card/card.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import PrimaryButton from 'ui/src/button/primary-button';
import Pagination from '@packages/core/utils/paginition';
import UserTable from './component/user-table';
import useUsersCount from './logic/use-user-count';
import useUser from './logic/use-user';

export default function UserList({
  itemsPerPage,
  buttonCount,
  state,
}: {
  itemsPerPage: number;
  buttonCount: number;
  state: boolean | null;
}) {
  const navigate = useNavigate();
  const [pageStart, setPageStart] = useState<number>(0);

  const choosePage = ({ start }: { start: number }) => {
    const newPage: number = start;
    setPageStart(newPage);
  };

  const { data: quantityData } = useUsersCount(state);
  const { data } = useUser(pageStart, itemsPerPage, state);

  if (!data) {
    <div>Data is empty</div>;
  }

  return (
    <Card>
      <CardHeader title={'User'}>
        <PrimaryButton
          onClick={() => {
            navigate('create');
          }}
          data-testid="list-create-button"
        >
          Create user
        </PrimaryButton>
      </CardHeader>

      <CardContent>
        <UserTable items={data?.users} />
      </CardContent>

      <CardContent>
        <Pagination
          buttonCount={buttonCount}
          listLength={quantityData?.usersCount ?? 0}
          itemPerPage={itemsPerPage}
          choosePage={choosePage}
        />
      </CardContent>
    </Card>
  );
}
