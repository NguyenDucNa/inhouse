import Card from '@packages/ui/card/card.tsx';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import FormItem from '@packages/ui/form/form-item.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import { useCallback, useState } from 'react';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import { useCreateMenu } from '@client/page/management/menu/menu-create/logic/use-create-menu.ts';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error.ts';
import { useNavigate } from 'react-router-dom';
import CardContent from '@packages/ui/card/card-content.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import { useCompanyId } from '@packages/core/company/company-context.ts';

export default function MenuCreate() {
  const companyId = useCompanyId();
  const navigate = useNavigate();

  const [create, { loading, error }] = useCreateMenu();
  const [title, setTitle] = useState<string>('');

  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const onSubmit = useCallback(
    (title: string) => {
      create({
        variables: { companyId: companyId, input: { title: title } },
      })
        .then(() => {
          navigate('..');
        })
        .catch((e) => void e);
    },
    [companyId, navigate, create]
  );

  return (
    <Card>
      <CardHeader title="Menu Create" />

      <CardContent>
        <FormLayout>
          <FormItem className="max-w-md" title={'Menu title'}>
            <TextInput
              data-testid="title-input"
              type="text"
              label="Menu title"
              name="title"
              placeholder="Title"
              value={title}
              error={validationError.title}
              autoComplete={'off'}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </FormItem>

          {error && <AlertError title={error.name} message={error.message} />}
        </FormLayout>
        {error && <AlertError title={error.name} message={error.message} />}
      </CardContent>

      <CardFooter>
        <div className="flex justify-center">
          <PrimaryButton
            id="create-button"
            data-testid="create-button"
            className="w-32"
            onClick={() => {
              onSubmit(title);
            }}
            loading={loading}
          >
            Create
          </PrimaryButton>
        </div>
      </CardFooter>
    </Card>
  );
}
