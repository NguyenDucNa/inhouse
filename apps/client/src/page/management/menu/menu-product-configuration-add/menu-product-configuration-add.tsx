import CardHeader from '@packages/ui/card/card-header.tsx';
import Card from '@packages/ui/card/card.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import FormItem from '@packages/ui/form/form-item.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import { CreateProductConfigurationType } from '@client/graphql/types/graphql.ts';
import useFormData from '@client/module/utils/use-form-data.ts';
import MenuSelectionInput from '@packages/ui/form/input/menu-selection-input.tsx';
import { formatProductConfigurationType } from '@client/page/management/menu/menu-product-configuration-edit/logic/format-product-configuration-type.ts';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import { useCreateMenuProductConfiguration } from '@client/page/management/menu/menu-product-configuration-add/logic/use-create-menu-product-configuration.ts';
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error.ts';

interface FormData {
  title: string;
  type: CreateProductConfigurationType;
}

export default function MenuProductConfigurationAdd() {
  const productId = useParams().productId ?? '';
  const navigate = useNavigate();

  const [update, { loading, error }] = useCreateMenuProductConfiguration();
  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const { data, handle, manualHandle } = useFormData<FormData>({
    title: '',
    type: CreateProductConfigurationType.Selection,
  });

  const submit = useCallback(() => {
    update({ variables: { productId: productId, input: data } })
      .then(() => {
        navigate('..');
      })
      .catch((e) => void e);
  }, [data, productId, update, navigate]);

  return (
    <Card>
      <CardHeader title="Add configuration" withBackButton={true} />

      <CardContent>
        <FormLayout>
          <FormItem title="Title">
            <TextInput
              type="text"
              label="title"
              value={data.title}
              name="title"
              placeholder="Title"
              error={validationError.title}
              onChange={handle}
            />
          </FormItem>
          <MenuSelectionInput
            title="Type"
            data={[
              CreateProductConfigurationType.Selection,
              CreateProductConfigurationType.Option,
            ]}
            value={data.type}
            onChange={(newValue) => {
              manualHandle('type', newValue);
            }}
            build={(type) => ({
              id: type,
              name: formatProductConfigurationType(type),
            })}
          />
        </FormLayout>
      </CardContent>

      <CardFooter>
        <CardFooter>
          <SecondaryButton
            className="w-32"
            onClick={() => {
              navigate('..');
            }}
          >
            Cancel
          </SecondaryButton>
          <PrimaryButton className="w-32" loading={loading} onClick={submit}>
            Create
          </PrimaryButton>
        </CardFooter>
      </CardFooter>
    </Card>
  );
}
