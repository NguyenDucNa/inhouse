import CardHeader from '@packages/ui/card/card-header.tsx';
import Card from '@packages/ui/card/card.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import useFormData from '@client/module/utils/use-form-data.ts';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import FormItem from '@packages/ui/form/form-item.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import { useCreateBranch } from '@client/page/management/branch/branch-create/logic/use-create-branch.ts';
import { useCallback } from 'react';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error.ts';
import { useNavigate } from 'react-router-dom';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import { useCompanyId } from '@packages/core/company/company-context.ts';

interface FormData {
  name: string;
  address: string;
}

export default function BranchCreate() {
  const navigate = useNavigate();
  const companyId = useCompanyId();

  const { data: form, handle } = useFormData<FormData>({
    name: '',
    address: '',
  });

  const [create, { error, loading }] = useCreateBranch();
  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const submit = useCallback(() => {
    create({
      variables: {
        companyId: companyId,
        input: form,
      },
    })
      .then(() => {
        navigate('..');
      })
      .catch((e) => void e);
  }, [companyId, create, form, navigate]);

  return (
    <Card>
      <CardHeader title="Create branch" />

      <CardContent>
        <FormLayout>
          <FormItem className="max-w-md" title="Name">
            <TextInput
              type="text"
              name="name"
              label="name"
              autoComplete="off"
              placeholder="Name"
              error={validationError.name}
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
              error={validationError.address}
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
        <div className="flex justify-center space-x-4">
          <SecondaryButton
            className="w-32"
            onClick={() => {
              navigate('..');
            }}
          >
            Cancel
          </SecondaryButton>
          <PrimaryButton
            id="create-button"
            data-testid="create-button"
            className="w-32"
            onClick={submit}
            loading={loading}
          >
            Create
          </PrimaryButton>
        </div>
      </CardFooter>
    </Card>
  );
}
