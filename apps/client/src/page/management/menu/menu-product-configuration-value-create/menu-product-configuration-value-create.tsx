import Card from '@packages/ui/card/card.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import { Form, useNavigate, useParams } from 'react-router-dom';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import { useCallback, useState } from 'react';
import FormItem from '@packages/ui/form/form-item.tsx';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import { useCompanyCurrency } from '@packages/core/company/company-context.ts';
import { useCreateMenuProductConfigurationValue } from '@client/page/management/menu/menu-product-configuration-value-create/logic/use-create-menu-product-configuration.ts';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error.ts';
import { normalizeCurrency } from '@packages/core/utils/currency-formatter.ts';

interface Form {
  name: string;
  price: string;
}

export default function MenuProductConfigurationValueCreate() {
  const navigate = useNavigate();
  const currency = useCompanyCurrency();
  const configurationId = useParams().configurationId ?? '';
  const [form, setForm] = useState<Form>({ name: '', price: '' });

  const [update, { loading: updating, error }] =
    useCreateMenuProductConfigurationValue();

  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const submit = useCallback(() => {
    update({
      variables: {
        menuProductConfigurationId: configurationId,
        input: {
          ...form,
          price: normalizeCurrency(form.price, currency),
        },
      },
    })
      .then(() => {
        navigate('..');
      })
      .catch((e) => void e);
  }, [update, configurationId, form, currency, navigate]);

  const updateForm = useCallback(
    (target: string, value: string) => {
      setForm({ ...form, [target]: value });
    },
    [setForm, form]
  );

  return (
    <Card>
      <CardHeader title="Price settings" />

      <CardContent>
        <FormLayout>
          <FormItem className="w-64" title={'Name'}>
            <TextInput
              data-testid="name-input"
              type="text"
              label="name"
              value={form.name}
              name="name"
              placeholder="Name"
              error={validationError.name}
              onChange={(event) => {
                updateForm('name', event.target.value);
              }}
            />
          </FormItem>

          <FormItem className="w-32" title={'Price'}>
            <TextInput
              data-testid="price-input"
              type="number"
              label="price"
              value={form.price}
              name="price"
              placeholder="Price"
              error={validationError.price}
              onChange={(event) => {
                updateForm('price', event.target.value);
              }}
            />
          </FormItem>
        </FormLayout>

        {error && (
          <AlertError
            className="mt-4"
            title={error.name}
            message={error.message}
          />
        )}
      </CardContent>

      <CardFooter>
        <SecondaryButton
          className="w-32"
          onClick={() => {
            navigate('..');
          }}
        >
          Back
        </SecondaryButton>
        <PrimaryButton
          className="w-32"
          data-testid="create-button"
          onClick={submit}
          loading={updating}
        >
          Create
        </PrimaryButton>
      </CardFooter>
    </Card>
  );
}
