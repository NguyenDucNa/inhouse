import { useNavigate, useParams } from 'react-router-dom';
import { useGetMenu } from '@client/page/management/menu/menu-detail/logic/use-get-menu.ts';
import { useCallback, useEffect } from 'react';
import { UpdateMenu } from '@client/graphql/types/graphql.ts';
import Spinner from '@packages/ui/spinner.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import FormItem from '@packages/ui/form/form-item.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import useUpdateMenu from '@client/page/management/menu/menu-edit/logic/use-update-menu.ts';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import Card from '@packages/ui/card/card.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import useFormData from '@client/module/utils/use-form-data.ts';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error.ts';

function MenuEdit() {
  const menuId = useParams().menuId ?? '';
  const navigate = useNavigate();

  const { data, loading, error } = useGetMenu(menuId);
  const [updateMenu, { loading: updating, error: updateError }] =
    useUpdateMenu();

  const applicationErrors = formatGraphQlError(updateError?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const {
    data: updateData,
    handle,
    setData,
  } = useFormData<UpdateMenu>({ title: '' });

  useEffect(() => {
    setData({ title: data?.menu.title ?? '' });
  }, [data, setData]);

  const update = useCallback(() => {
    updateMenu({ variables: { menuId: menuId, input: updateData } })
      .then(() => {
        navigate(`/menu/${menuId}`);
      })
      .catch((e) => void e);
  }, [menuId, navigate, updateData, updateMenu]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Card>
      <CardHeader title="Menu edit" />

      <CardContent>
        {error && <AlertError title={error.name} message={error.message} />}

        <FormLayout>
          <FormItem title={'Name'} className="sm:col-span-2 max-w-xs">
            <TextInput
              type="text"
              name="title"
              label="Title"
              key="title"
              placeholder="Title"
              value={updateData.title}
              error={validationError.title}
              onChange={handle}
            />
          </FormItem>

          <div className="flex items-center justify-end space-x-4">
            <SecondaryButton
              onClick={() => {
                navigate('..');
              }}
            >
              Cancel
            </SecondaryButton>
            <PrimaryButton disabled={updating} onClick={update}>
              Save
            </PrimaryButton>
          </div>
        </FormLayout>
      </CardContent>
    </Card>
  );
}

export default MenuEdit;
