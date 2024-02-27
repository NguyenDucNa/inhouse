import Card from '@packages/ui/card/card.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import { useMenuProductConfiguration } from '@client/page/management/menu/menu-product-configuration-edit/logic/use-menu-product-configuration.ts';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import FormItem from '@packages/ui/form/form-item.tsx';
import { getFragmentData } from '@client/graphql/types';
import CardContent from '@packages/ui/card/card-content.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '@packages/ui/spinner.tsx';
import Center from '@packages/ui/center.tsx';
import MenuSelectionInput from '@packages/ui/form/input/menu-selection-input.tsx';
import { ProductConfigurationType } from '@client/graphql/types/graphql.ts';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import { formatProductConfigurationType } from '@client/page/management/menu/menu-product-configuration-edit/logic/format-product-configuration-type.ts';
import { useUpdateMenuProductConfiguration } from '@client/page/management/menu/menu-product-configuration-edit/logic/use-update-menu-product-configuration.ts';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error.ts';
import MenuProductConfigurationDelete from '@client/page/management/menu/menu-product-configuration-edit/component/menu-product-configuration-delete.tsx';
import { MenuProductConfigurationFragment } from '@packages/network-graphql/common/menu-product-configuration-fragment.ts';

interface FormData {
  title: string;
  type: ProductConfigurationType;
}

export default function MenuProductConfigurationEdit() {
  const configurationId = useParams().configurationId ?? '';
  const navigate = useNavigate();

  const [form, setForm] = useState<FormData>({
    title: '',
    type: ProductConfigurationType.Selection,
  });

  const {
    data,
    loading,
    error: loadingError,
  } = useMenuProductConfiguration(configurationId);
  const [update, { loading: updating, error: updateError }] =
    useUpdateMenuProductConfiguration();

  const error = loadingError ?? updateError;
  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const configuration = getFragmentData(
    MenuProductConfigurationFragment,
    data?.menuProductConfiguration
  );

  useEffect(() => {
    if (configuration) {
      setForm({
        title: configuration.title,
        type: configuration.type,
      });
    }
  }, [configuration]);

  const updateForm = useCallback(
    (target: string, value: string | ProductConfigurationType) => {
      setForm({ ...form, [target]: value });
    },
    [form]
  );

  const submit = useCallback(() => {
    update({ variables: { id: configurationId, input: form } })
      .then(() => {
        navigate('..');
      })
      .catch((e) => void e);
  }, [configurationId, form, navigate, update]);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader title="Edit configuration" />

        <CardContent>
          {loading ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            <FormLayout>
              <FormItem title={'Title'} className="max-w-md">
                <TextInput
                  type="text"
                  label="title"
                  value={form.title}
                  name="title"
                  placeholder="Title"
                  error={validationError.title}
                  onChange={(event) => {
                    updateForm('title', event.target.value);
                  }}
                />
              </FormItem>

              <MenuSelectionInput
                className="max-w-md"
                title="Type"
                data={[
                  ProductConfigurationType.Base,
                  ProductConfigurationType.Selection,
                  ProductConfigurationType.Option,
                ]}
                value={form.type}
                onChange={(newValue) => {
                  updateForm('type', newValue);
                }}
                build={(type) => ({
                  id: type,
                  name: formatProductConfigurationType(type),
                })}
              />

              {error && (
                <AlertError
                  className="mt-4"
                  title={error.name}
                  message={error.message}
                />
              )}
            </FormLayout>
          )}
        </CardContent>

        <CardFooter>
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
            loading={loading || updating}
            onClick={submit}
          >
            Update
          </PrimaryButton>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader title="Extra actions" />
        <CardContent>
          <MenuProductConfigurationDelete
            productConfigurationId={configurationId}
          />
        </CardContent>
      </Card>
    </div>
  );
}
