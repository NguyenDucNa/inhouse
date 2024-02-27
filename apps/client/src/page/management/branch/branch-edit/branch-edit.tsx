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
import { useGetBranch } from '@client/page/management/branch/branch-edit/logic/use-get-branch.tsx';
import { useUpdateBranch } from '@client/page/management/branch/branch-edit/logic/use-update-branch.tsx';
import BranchDeleteButton from '@client/page/management/branch/branch-edit/components/delete-branch-button.tsx';

interface BranchEditForm {
  name: string;
  address: string;
}

export default function BranchEdit() {
  const navigate = useNavigate();
  const branchId = useParams().branchId ?? '';

  const {
    data: form,
    setData,
    handle,
  } = useFormData<BranchEditForm>({
    name: '',
    address: '',
  });

  const { loading, error: loadingError, data } = useGetBranch(branchId);
  const [updateBranch, { error: updatingError, loading: updating }] =
    useUpdateBranch();

  const submit = useCallback(() => {
    updateBranch({
      variables: {
        id: branchId,
        input: form,
      },
    })
      .then(() => {
        navigate('..');
      })
      .catch((e) => void e);
  }, [branchId, form, navigate, updateBranch]);

  useEffect(() => {
    setData({
      name: data?.branch.name ?? '',
      address: data?.branch.address ?? '',
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
        <CardHeader title="Edit Branch" withBackButton={true} />

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

            <FormItem className="max-w-md" title="Address">
              <TextInput
                type="text"
                name="address"
                label="address"
                autoComplete="off"
                placeholder="Address"
                value={form.address}
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
              onClick={submit}
              disabled={updating}
              loading={updating}
            >
              Save
            </PrimaryButton>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardContent>
          <BranchDeleteButton menuId={branchId} />
        </CardContent>
      </Card>
    </div>
  );
}
