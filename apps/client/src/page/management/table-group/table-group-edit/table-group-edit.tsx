import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import Card from '@packages/ui/card/card.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import useFormData from '@client/module/utils/use-form-data.ts';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import FormItem from '@packages/ui/form/form-item.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import Center from '@packages/ui/center.tsx';
import Spinner from '@packages/ui/spinner.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import { useUpdateTableGroup } from '@client/page/management/table-group/table-group-edit/logic/use-update-table-group';
import TableGroupDeleteButton from '@client/page/management/table-group/table-group-edit/components/delete-table-group-button';
import { useTableGroupQuery } from '@client/page/management/table/table-list/logic/use-table-group-query.ts';
interface TableGroupForm {
  name: string;
  arrangementCode: string;
}

export default function TableGroupEdit() {
  const navigate = useNavigate();
  const tableGroupId = useParams().tableGroupId ?? '';

  const {
    data: form,
    setData,
    handle,
  } = useFormData<TableGroupForm>({
    name: '',
    arrangementCode: '',
  });

  const {
    loading,
    error: loadingError,
    data,
  } = useTableGroupQuery(tableGroupId);

  const [updateTableGroup, { error: updatingError, loading: updating }] =
    useUpdateTableGroup();

  const submit = useCallback(() => {
    updateTableGroup({
      variables: {
        id: tableGroupId,
        name: form.name,
        arrangementCode: form.arrangementCode,
      },
    })
      .then(() => {
        navigate('..');
      })
      .catch((e) => void e);
  }, [tableGroupId, form, navigate, updateTableGroup]);

  useEffect(() => {
    setData({
      name: data?.tableGroup?.name ?? '',
      arrangementCode: data?.tableGroup?.arrangementCode ?? '',
    });
  }, [data, setData]);

  const error = loadingError ?? updatingError;

  if (loading) {
    return (
      <Center className="h-32">
        <Spinner />
      </Center>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader title="Edit Table Group" withBackButton={true} />

        <CardContent>
          <FormLayout>
            <FormItem className="max-w-md" title="Name">
              <TextInput
                type="text"
                name="name"
                label="name"
                autoComplete="off"
                placeholder="Name"
                value={form.name}
                onChange={handle}
              />
            </FormItem>

            <FormItem className="max-w-md" title="Arrangement Code">
              <TextInput
                type="text"
                name="arrangementCode"
                label="arrangementCode"
                autoComplete="off"
                placeholder="Arrangement Code"
                value={form.arrangementCode}
                onChange={handle}
              />
            </FormItem>
          </FormLayout>

          {error && (
            <AlertError
              className="mt-4"
              title={'Error'}
              message={error.message}
            />
          )}
        </CardContent>

        <CardFooter>
          <div className="flex items-center justify-center gap-x-4">
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
              disabled={updating}
              loading={updating}
              onClick={submit}
            >
              Save
            </PrimaryButton>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardContent>
          <TableGroupDeleteButton tableGroupId={tableGroupId} />
        </CardContent>
      </Card>
    </div>
  );
}
