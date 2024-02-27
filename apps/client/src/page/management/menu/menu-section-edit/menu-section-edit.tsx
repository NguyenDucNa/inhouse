import Card from '@packages/ui/card/card.tsx';
import FormItem from '@packages/ui/form/form-item.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import { useCallback, useEffect, useState } from 'react';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error.ts';
import { useNavigate, useParams } from 'react-router-dom';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import MenuSectionDelete from '@client/page/management/menu/menu-section-edit/components/menu-section-delete.tsx';
import { useGetMenuSection } from './logic/use-get-menu-section';
import { useUpdateMenuSection } from './logic/use-update-menu-section';

interface MenuSectionForm {
  name: string;
  description: string;
}

export default function MenuSectionEdit() {
  const sectionId = useParams().menuSectionId ?? '';
  const navigate = useNavigate();

  const { data } = useGetMenuSection(sectionId);

  const [edit, { loading, error }] = useUpdateMenuSection();
  const [form, setForm] = useState<MenuSectionForm>({
    name: '',
    description: '',
  });

  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const updateForm = useCallback(
    (target: string, value: string) => {
      setForm({ ...form, [target]: value });
    },
    [form]
  );

  useEffect(() => {
    setForm({
      name: data?.menuSection?.name ?? '',
      description: data?.menuSection?.description ?? '',
    });
  }, [data]);

  const onSubmit = useCallback(
    (form: MenuSectionForm) => {
      edit({
        variables: { id: sectionId, input: form },
      })
        .then(() => {
          navigate('..');
        })
        .catch((e) => void e);
    },
    [sectionId, navigate, edit]
  );

  return (
    <div className="flex-col space-y-4">
      <Card>
        <CardHeader title="Edit menu section" />
        <CardContent>
          <FormLayout>
            <FormItem className="max-w-md" title={'Name'}>
              <TextInput
                data-testid="title-input"
                type="text"
                label="name"
                name="name"
                placeholder="Name"
                value={form.name}
                error={validationError.name}
                autoComplete={'off'}
                onChange={(event) => {
                  updateForm(event.target.name, event.target.value);
                }}
              />
            </FormItem>

            <FormItem className="max-w-md" title={'Description'}>
              <TextInput
                data-testid="description-input"
                type="text"
                label="description"
                name="description"
                placeholder="Description"
                value={form.description}
                error={validationError.description}
                autoComplete={'off'}
                onChange={(event) => {
                  updateForm(event.target.name, event.target.value);
                }}
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
          <div className="flex justify-center">
            <PrimaryButton
              id="save-button"
              data-testid="save-button"
              className="w-32"
              onClick={() => {
                onSubmit(form);
              }}
              loading={loading}
            >
              Save
            </PrimaryButton>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader title="Extra actions" />
        <CardContent>
          <MenuSectionDelete sectionId={sectionId} />
        </CardContent>
      </Card>
    </div>
  );
}
