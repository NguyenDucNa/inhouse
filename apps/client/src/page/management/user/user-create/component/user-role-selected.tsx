import { UserRole } from '@client/graphql/types/graphql';
import { Dispatch, SetStateAction } from 'react';

export default function UserRoleSelected({
  roles,
  setRoles,
}: {
  roles: Set<UserRole>;
  setRoles: Dispatch<SetStateAction<Set<UserRole>>>;
}) {
  const handleRoleClick = (role: UserRole) => {
    setRoles((prevRoles) => {
      const newRoles = new Set(prevRoles);
      newRoles.has(role) ? newRoles.delete(role) : newRoles.add(role);
      return newRoles;
    });
  };

  return (
    <>
      <div
        className={`active:bg-violet-500 py-4 px-8 mx-2 border rounded-md border-gray-200 cursor-pointer inline-block ${
          roles.has(UserRole.Admin) && 'bg-violet-500'
        }`}
        onClick={() => {
          handleRoleClick(UserRole.Admin);
        }}
      >
        Admin
      </div>

      <div
        className={`active:bg-violet-500 py-4 px-8 mx-2 border rounded-md border-gray-200 cursor-pointer inline-block ${
          roles.has(UserRole.Manager) && 'bg-violet-500'
        }`}
        onClick={() => {
          handleRoleClick(UserRole.Manager);
        }}
      >
        Manager
      </div>

      <div
        className={`active:bg-violet-500 py-4 px-8 mx-2 border rounded-md border-gray-200 cursor-pointer inline-block ${
          roles.has(UserRole.Waiter) && 'bg-violet-500'
        }`}
        onClick={() => {
          handleRoleClick(UserRole.Waiter);
        }}
      >
        Waiter
      </div>
    </>
  );
}
