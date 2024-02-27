import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error';
import CardContent from '@packages/ui/card/card-content';
import FormLayout from '@packages/ui/form/form-layout';
import TextInput from '@packages/ui/form/input/text-input';
import FormItem from '@packages/ui/form/form-item';
import Card from '@packages/ui/card/card';
import CardHeader from '@packages/ui/card/card-header';
import AlertError from '@packages/ui/alert/alert-error';
import CardFooter from '@packages/ui/card/card-footer';
import SecondaryButton from '@packages/ui/button/secondary-button';
import PrimaryButton from '@packages/ui/button/primary-button';
import useFormData from '@client/module/utils/use-form-data';
import ToggleInput from '@packages/ui/form/input/toggle-input';
import useUserDetail from './logic/use-user-detail';
import useUpdateUser from './logic/use-update-user';
import UserDelete from './component/user-delete';

interface FormData {
  id: string,   
  username: string,
  firstName: string,
  lastName: string
  email: string,
  status: boolean,
}

export default function UserDetail() {
  const userId = useParams().userId ?? '';
  const navigate = useNavigate();

  const {
    data: form,
    setData,
    handle,
    manualHandle,
  } = useFormData<FormData>({
    id: "",   
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    status: false,
  });

  const { data, error: loadingError } = useUserDetail(userId);

  const [update, { error: updateError }] =
  useUpdateUser();

  const error = loadingError ?? updateError;
  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);


  useEffect(() => {
    if (data?.user) {
      setData({
        id: data.user.id,
        username: data.user.username,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        status: data.user.status,
      });
    }
  }, [data?.user, setData]);


  const submit = useCallback(() => {
    update({ variables: { id: userId, data: {
      username: form.username,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      status: form.status,
    } } })
      .then(() => {
        navigate('..');
      })
      .catch((e) => void e);
  }, [userId, form, navigate, update]);

  return (
    <div className="space-y-4 ">
      <Card>
        <CardHeader title="Edit User" />
        <CardContent>
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
                data-testid="fullname-input"
                type="text"
                label="Firstname"
                value={form.firstName}
                name="firstName"
                placeholder="fullname"
                error={validationError.title}
                onChange={handle}
              />
            </FormItem>

            <FormItem title={'Lastname'} className="max-w-md">
              <TextInput
                data-testid="fullname-input"
                type="text"
                label="Lastname"
                value={form.lastName}
                name="lastName"
                placeholder="fullname"
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


            <FormItem title="Status" className="w-32">
              <ToggleInput
                value={form.status}
                onChange={(newValue) => {
                  manualHandle('status', newValue);
                }}
                data-testid="product-active-toggle"
              />
            </FormItem>

            {error && (
              <AlertError
                className="mt-4"
                title={error.name}
                message={error.message}
              />
            )}
          </FormLayout>    
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
            onClick={submit}
          >
            Update
          </PrimaryButton>
        </CardFooter>
      </Card>

      
      <Card>
        <CardHeader title="Extra actions" />
        <CardContent>
          <UserDelete userId={userId} />
        </CardContent>
      </Card>
      
    </div>
  );
}
