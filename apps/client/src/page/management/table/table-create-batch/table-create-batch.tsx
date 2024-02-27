import CardHeader from '@packages/ui/card/card-header.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import useFormData from '@client/module/utils/use-form-data.ts';
import FormItem from '@packages/ui/form/form-item.tsx';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import Card from '@packages/ui/card/card.tsx';
import { useCallback } from 'react';
import { useTableCreateBatch } from '@client/page/management/table/table-create-batch/logic/use-table-create-batch.ts';

interface FormData {
  pattern: string;
  start: string;
  count: string;
  seats: string;
}

function validateTableCreateBatch(data: FormData): {
  status: boolean;
  error: Partial<FormData>;
} {
  let status = true;
  const error: Partial<FormData> = {};

  if (!data.pattern.includes('%d')) {
    status = false;
    error.pattern = 'Pattern must include %d';
  }

  if (parseInt(data.seats) <= 0) {
    status = false;
    error.seats = 'Seats must be greater than 0';
  }

  if (parseInt(data.seats) > 99) {
    status = false;
    error.seats = 'Seats must be less than 100';
  }

  if (parseInt(data.start) < 0) {
    status = false;
    error.start = 'Start must be greater than or equal to 0';
  }

  if (parseInt(data.count) <= 0) {
    status = false;
    error.count = 'Count must be greater than 0';
  }

  return { status: status, error: error };
}

export default function TableCreateBatch(props: {
  tableGroupId: string;
  onClose?: () => void;
}) {
  const [create] = useTableCreateBatch();

  const { data, handle } = useFormData<FormData>({
    pattern: '%d',
    start: '1',
    count: '1',
    seats: '1',
  });
  const { status: validationStatus, error } = validateTableCreateBatch(data);

  const submit = useCallback(async () => {
    if (!validationStatus) {
      return;
    }

    const batch = [];
    for (
      let i = parseInt(data.start);
      i < parseInt(data.start) + parseInt(data.count);
      i++
    ) {
      batch.push({
        name: data.pattern.replace('%d', i.toString()),
        seats: parseInt(data.seats),
      });
    }

    try {
      await create({
        variables: {
          tableGroup: props.tableGroupId,
          data: batch,
        },
      });
      props.onClose?.();
    } catch (e) {
      console.error(e);
    }
  }, [
    create,
    data.count,
    data.pattern,
    data.seats,
    data.start,
    props,
    validationStatus,
  ]);

  return (
    <Card>
      <CardHeader title="Create batch" />
      <CardContent>
        <FormLayout>
          <FormItem title="Pattern">
            <TextInput
              type="text"
              label="pattern"
              value={data.pattern}
              name="pattern"
              placeholder="Use %d to indicate number"
              error={error.pattern}
              onChange={handle}
            />
          </FormItem>

          <div className="flex space-x-4">
            <FormItem className="w-32" title="Seats">
              <TextInput
                type="number"
                label="seats"
                value={data.seats}
                name="seats"
                placeholder="Enter number of seats"
                error={error.seats}
                onChange={handle}
              />
            </FormItem>

            <FormItem className="w-32" title="Start">
              <TextInput
                type="number"
                label="start"
                value={data.start}
                name="start"
                placeholder="Enter integer"
                error={error.start}
                onChange={handle}
              />
            </FormItem>

            <FormItem className="w-32" title="Count">
              <TextInput
                type="number"
                label="count"
                value={data.count}
                name="count"
                placeholder="Enter integer"
                error={error.count}
                onChange={handle}
              />
            </FormItem>
          </div>
        </FormLayout>
      </CardContent>

      <CardFooter>
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
      </CardFooter>
    </Card>
  );
}
