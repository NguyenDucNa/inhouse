import Card from '@packages/ui/card/card.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import { TableItemFragment } from '@client/graphql/types/graphql.ts';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import useFormData from '@client/module/utils/use-form-data.ts';
import FormItem from '@packages/ui/form/form-item.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import { useTableUpdateBatch } from '@client/page/management/table/table-edit-batch/logic/use-table-update-batch.ts';
import { useCallback } from 'react';

interface FormData {
  seats: string;
}

function validateTableUpdateBatch(data: FormData): {
  status: boolean;
  error: Partial<FormData>;
} {
  let status = true;
  const error: Partial<FormData> = {};

  if (parseInt(data.seats) <= 0) {
    status = false;
    error.seats = 'Seats must be greater than 0';
  }

  if (parseInt(data.seats) > 99) {
    status = false;
    error.seats = 'Seats must be less than 100';
  }

  return { status: status, error: error };
}

export default function TableEditBatch(props: {
  tables: TableItemFragment[];
  onClose: () => void;
}) {
  const { data, handle } = useFormData<FormData>({
    seats: props.tables.at(0)?.seats.toString() ?? '0',
  });

  const { status: validationStatus, error } = validateTableUpdateBatch(data);
  const [update] = useTableUpdateBatch();

  const submit = useCallback(async () => {
    if (!validationStatus) {
      return;
    }

    await update({
      variables: {
        data: props.tables.map((table) => {
          return {
            ...table,
            __typename: undefined,
            seats: parseInt(data.seats),
          };
        }),
      },
      refetchQueries: ['tableGroup'],
    });

    props.onClose();
  }, [data.seats, props, update, validationStatus]);

  return (
    <Card>
      <CardHeader title={`Batch edit table (${props.tables.length})`} />

      <CardContent>
        <FormLayout>
          <FormItem title="Seats">
            <TextInput
              type="text"
              label="seats"
              value={data.seats}
              name="seats"
              placeholder="Enter number of seats"
              error={error.seats}
              onChange={handle}
            />
          </FormItem>
        </FormLayout>
      </CardContent>

      <CardFooter>
        <div className="flex justify-end space-x-2">
          <PrimaryButton
            className="w-32"
            disabled={!validationStatus}
            onClick={() => {
              submit().catch((e) => void e);
            }}
          >
            Run
          </PrimaryButton>
          <SecondaryButton className="w-32" onClick={props.onClose}>
            Cancel
          </SecondaryButton>
        </div>
      </CardFooter>
    </Card>
  );
}
