import Card from '@packages/ui/card/card.tsx';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import FormItem from '@packages/ui/form/form-item.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import { useCallback, useState } from 'react';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error.ts';
import { useNavigate } from 'react-router-dom';
import CardContent from '@packages/ui/card/card-content.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import SecondaryButton from 'ui/src/button/secondary-button';
import Center from 'ui/src/center';
import Spinner from 'ui/src/spinner';
import useFormData from '@client/module/utils/use-form-data';
import { UserRole } from '@client/graphql/types/graphql';
import useCreateUser from './logic/use-user-create';
import UserRoleSelected from './component/user-role-selected';
import { useCompanyId } from '@packages/core/company/company-context.ts';

interface FormData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole[];
}

export default function UserCreate() {
  const companyID = useCompanyId();
  const navigate = useNavigate();

  const [create, { loading, error }] = useCreateUser();
  const [roles, setRoles] = useState<Set<UserRole>>(new Set());
  const { data: form, handle } = useFormData<FormData>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    role: Array.from(roles),
  });

  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const onSubmit = useCallback(() => {
    create({
      variables: { companyID: companyID, data: form },
    })
      .then((value) => {
        alert('Your password is ' + value.data?.createUser.password);
        navigate('..');
      })
      .catch((e) => void e);
  }, [form, navigate, create]);

  return (
    <div className="space-y-4 ">
      <Card>
        <CardHeader title="Create User" />

        <CardContent>
          {loading ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            <FormLayout>
              <FormItem title={'Username'} className="max-w-md">
                <TextInput
                  data-testid="Username-input"
                  type="text"
                  label="title"
                  value={form.username}
                  name="username"
                  placeholder="Username"
                  error={validationError.title}
                  onChange={handle}
                />
              </FormItem>

              <FormItem title={'Firstname'} className="max-w-md">
                <TextInput
                  data-testid="firstName-input"
                  type="text"
                  label="Firstname"
                  value={form.firstName}
                  name="firstName"
                  placeholder="firstname"
                  error={validationError.title}
                  onChange={handle}
                />
              </FormItem>

              <FormItem title={'Lastname'} className="max-w-md">
                <TextInput
                  data-testid="lastName-input"
                  type="text"
                  label="Lastname"
                  value={form.lastName}
                  name="lastName"
                  placeholder="lastname"
                  error={validationError.title}
                  onChange={handle}
                />
              </FormItem>

              <FormItem title={'Email'} className="max-w-md">
                <TextInput
                  data-testid="description-input"
                  type="text"
                  label="description"
                  value={form.email}
                  name="email"
                  placeholder="description"
                  error={validationError.title}
                  onChange={handle}
                />
              </FormItem>

              <FormItem title={'User Role'} className="max-w-md">
                <UserRoleSelected roles={roles} setRoles={setRoles} />
              </FormItem>

              {error && (
                <AlertError
                  className="mt-4"
                  title={error.name}
                  message={error.message}
                />
              )}
            </FormLayout>
          )}
        </CardContent>

        <CardFooter>
          <SecondaryButton
            className="w-32"
            onClick={() => {
              navigate('..');
            }}
          >
            Cancel
          </SecondaryButton>
          <PrimaryButton
            className="w-32"
            data-testid="update-button"
            loading={loading}
            onClick={onSubmit}
          >
            Create
          </PrimaryButton>
        </CardFooter>
      </Card>
    </div>
  );
}
