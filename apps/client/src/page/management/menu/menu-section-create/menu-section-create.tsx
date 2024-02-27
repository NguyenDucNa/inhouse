import Card from '@packages/ui/card/card.tsx';
import FormItem from '@packages/ui/form/form-item.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import { useCallback } from 'react';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error.ts';
import { useNavigate, useParams } from 'react-router-dom';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import { useCreateMenuSection } from '@client/page/management/menu/menu-section-create/logic/use-create-menu-section.ts';
import useFormData from '@client/module/utils/use-form-data.ts';

interface FormData {
  name: string;
  description: string;
}

export default function MenuSectionCreate() {
  const menuId = useParams().menuId ?? 'default';
  const navigate = useNavigate();

  const [create, { loading, error }] = useCreateMenuSection();
  const { data, handle } = useFormData<FormData>({
    name: '',
    description: '',
  });

  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const onSubmit = useCallback(
    (form: FormData) => {
      create({
        variables: { menuId: menuId, input: form },
      })
        .then(() => {
          navigate('..');
        })
        .catch((e) => void e);
    },
    [menuId, navigate, create]
  );

  return (
    <Card>
      <CardHeader title="Create menu section" />

      <CardContent>
        <FormLayout>
          <FormItem className="max-w-md" title={'Name'}>
            <TextInput
              data-testid="name-input"
              type="text"
              label="name"
              name="name"
              placeholder="Name"
              value={data.name}
              error={validationError.name}
              autoComplete={'off'}
              onChange={handle}
            />
          </FormItem>

          <FormItem className="max-w-md" title={'Description'}>
            <TextInput
              data-testid="description-input"
              type="text"
              label="description"
              name="description"
              placeholder="Description"
              value={data.description}
              error={validationError.description}
              autoComplete={'off'}
              onChange={handle}
            />
          </FormItem>

          {applicationErrors?.map((e, index) => {
            return (
              <AlertError key={index} title={e.domain} message={e.message} />
            );
          })}
        </FormLayout>
      </CardContent>

      <CardFooter>
        <div className="flex justify-center space-x-4 w-96">
          <SecondaryButton
            className="flex-1"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </SecondaryButton>
          <PrimaryButton
            id="create-button"
            data-testid="create-button"
            className="w-32 flex-1"
            onClick={() => {
              onSubmit(data);
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
