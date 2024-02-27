import Card from '@packages/ui/card/card.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import { Form, useNavigate, useParams } from 'react-router-dom';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import { useCallback, useEffect, useState } from 'react';
import FormItem from '@packages/ui/form/form-item.tsx';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import { useMenuProductConfigurationValue } from '@client/page/management/menu/menu-product-configuration-value-edit/logic/use-menu-product-configuration-value.ts';
import Spinner from '@packages/ui/spinner.tsx';
import Center from '@packages/ui/center.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import { useUpdateMenuProductConfigurationValue } from '@client/page/management/menu/menu-product-configuration-value-edit/logic/use-update-menu-product-configuration.ts';
import { useCompanyCurrency } from '@packages/core/company/company-context.ts';
import {
  currencySymbol,
  formatRawCurrency,
  normalizeCurrency,
} from '@packages/core/utils/currency-formatter.ts';
import DeleteProductConfigurationMenu from '@client/page/management/menu/menu-product-configuration-value-edit/component/delete-product-configuration-value.tsx';

interface Form {
  name: string;
  price: string;
}

export default function MenuProductConfigurationValueEdit() {
  const navigate = useNavigate();
  const currency = useCompanyCurrency();
  const valueId = useParams().valueId ?? '';
  const [form, setForm] = useState<Form>({ name: '', price: '' });

  const {
    data,
    loading,
    error: loadingError,
  } = useMenuProductConfigurationValue(valueId);
  const [update, { loading: updating, error: updateError }] =
    useUpdateMenuProductConfigurationValue();
  const error = loadingError ?? updateError;

  useEffect(() => {
    const remoteData = data?.menuProductConfigurationValue;
    if (remoteData) {
      setForm({
        name: remoteData.name,
        price: formatRawCurrency(remoteData.price, currency).value,
      });
    }
  }, [currency, data]);

  const submit = useCallback(() => {
    update({
      variables: {
        id: valueId,
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
  }, [currency, form, navigate, update, valueId]);

  const updateForm = useCallback(
    (target: string, value: string) => {
      setForm({ ...form, [target]: value });
    },
    [setForm, form]
  );

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader title="Price settings" />

        <CardContent>
          {loading && (
            <Center>
              <Spinner />
            </Center>
          )}

          {data && (
            <FormLayout>
              <FormItem title={'Name'} className="max-w-xs">
                <TextInput
                  data-testid="name-input"
                  type="text"
                  label="name"
                  value={form.name}
                  name="name"
                  placeholder="Name"
                  onChange={(event) => {
                    updateForm('name', event.target.value);
                  }}
                />
              </FormItem>

              <FormItem title="Price" className="w-32">
                <TextInput
                  type="number"
                  data-testid="price-input"
                  label="value"
                  value={form.price}
                  name="value"
                  placeholder="Price"
                  suffix={
                    <span className="ml-2 text-gray-500">
                      {currencySymbol(currency)}
                    </span>
                  }
                  onChange={(event) => {
                    updateForm('price', event.target.value);
                  }}
                />
              </FormItem>
            </FormLayout>
          )}

          {error && <AlertError title={error.name} message={error.message} />}
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
            data-testid="save-button"
            onClick={submit}
            loading={loading || updating}
          >
            Save
          </PrimaryButton>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader title="Extra action" />

        <CardContent>
          <DeleteProductConfigurationMenu valueId={valueId} />
        </CardContent>
      </Card>
    </div>
  );
}
