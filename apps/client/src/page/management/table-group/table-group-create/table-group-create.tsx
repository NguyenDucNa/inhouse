import CardHeader from '@packages/ui/card/card-header.tsx';
import Card from '@packages/ui/card/card.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import useFormData from '@client/module/utils/use-form-data.ts';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import FormItem from '@packages/ui/form/form-item.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import { useCallback } from 'react';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error.ts';
import { useCreateTableGroup } from '@client/page/management/table-group/table-group-create/logic/use-create-table-group';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';

interface TableGroupForm {
  name: string;
  arrangementCode: string;
}

export default function TableGroupCreate(props: {
  branchId: string;
  onClose?: () => void;
}) {
  const { branchId } = props;
  const { data: form, handle } = useFormData<TableGroupForm>({
    name: '',
    arrangementCode: '',
  });

  const [create, { error, loading }] = useCreateTableGroup();
  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const submit = useCallback(() => {
    create({
      variables: {
        branchID: branchId,
        name: form.name,
        arrangementCode: form.arrangementCode,
      },
    })
      .then(() => {
        props.onClose?.();
      })
      .catch((e) => void e);
  }, [branchId, create, form.arrangementCode, form.name, props]);

  return (
    <Card>
      <CardHeader title="Create table group" />

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

          <FormItem className="max-w-md" title="Arrangement Code">
            <TextInput
              type="text"
              name="arrangementCode"
              label="arrangementCode"
              autoComplete="off"
              placeholder="Arrangement Code"
              error={validationError.name}
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
        <div className="flex justify-center space-x-4">
          <SecondaryButton className="w-32" onClick={props.onClose}>
            Close
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
