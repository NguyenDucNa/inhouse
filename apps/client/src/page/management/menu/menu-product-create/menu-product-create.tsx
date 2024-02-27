import Card from '@packages/ui/card/card.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import useCreateMenuProduct from '@client/page/management/menu/menu-product-create/logic/use-create-menu-product.ts';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error.ts';
import FormLayout from '@packages/ui/form/form-layout.tsx';
import FormItem from '@packages/ui/form/form-item.tsx';
import TextInput from '@packages/ui/form/input/text-input.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import ProductImagesEdit from '@client/page/management/menu/menu-product-edit/components/product-images-edit.tsx';
import MenuSectionSelection from '@client/page/management/menu/menu-section/menu-section-selection-input/menu-section-selection.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import ToggleInput from '@packages/ui/form/input/toggle-input.tsx';
import useFormData from '@client/module/utils/use-form-data.ts';
import { useCompanyCurrency } from '@packages/core/company/company-context.ts';
import {
  currencySymbol,
  normalizeCurrency,
} from '@packages/core/utils/currency-formatter.ts';

interface Form {
  title: string;
  description: string;
  images: string[];
  ingredients: string[];
  sectionId: string | null;
  enabled: boolean;
  basePrice: string;
}

export default function MenuProductCreate() {
  const menuId = useParams().menuId ?? '';
  const navigate = useNavigate();
  const currency = useCompanyCurrency();

  const [create, { loading, error }] = useCreateMenuProduct();

  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const {
    data: form,
    handle,
    manualHandle,
  } = useFormData<Form>({
    title: '',
    description: '',
    images: [],
    ingredients: [],
    sectionId: null,
    enabled: true,
    basePrice: '0',
  });

  const onSubmit = useCallback(
    (form: Form) => {
      create({
        variables: {
          menuId: menuId,
          input: {
            ...form,
            basePrice: normalizeCurrency(form.basePrice, currency),
          },
        },
      })
        .then((product) => {
          const createdProduct = product.data?.createMenuProduct;
          if (createdProduct) {
            navigate(`..`);
          }
        })
        .catch((e) => void e);
    },
    [create, menuId, currency, navigate]
  );

  return (
    <Card>
      <CardHeader title="Create product" />

      <CardContent>
        <FormLayout>
          <FormItem className="max-w-md" title={'Name'}>
            <TextInput
              data-testid="title-input"
              type="text"
              label="title"
              name="title"
              placeholder="Name"
              value={form.title}
              error={validationError.title}
              autoComplete={'off'}
              onChange={handle}
            />
          </FormItem>

          <FormItem className="max-w-md" title={'Description'}>
            <TextInput
              data-testid="title-input"
              type="text"
              label="description"
              name="description"
              placeholder="Description"
              value={form.description}
              error={validationError.description}
              autoComplete={'off'}
              onChange={handle}
            />
          </FormItem>

          <FormItem title="Price" className="w-32">
            <TextInput
              type="number"
              label="basePrice"
              value={form.basePrice}
              name="basePrice"
              placeholder="Price"
              error={validationError.basePrice}
              suffix={
                <span className="ml-2 text-gray-500">
                  {currencySymbol(currency)}
                </span>
              }
              onChange={handle}
            />
          </FormItem>

          <MenuSectionSelection
            menuId={menuId}
            value={form.sectionId}
            onChange={(sectionId) => {
              manualHandle('sectionId', sectionId);
            }}
          />

          <div>
            <ProductImagesEdit
              images={form.images}
              onChange={(newValue) => {
                manualHandle('images', newValue);
              }}
            />
            <p className="text-red-500 text-sm mt-2">
              {validationError.images}
            </p>
          </div>

          <FormItem title="Active" className="w-32">
            <ToggleInput
              value={form.enabled}
              onChange={(newValue) => {
                manualHandle('enabled', newValue);
              }}
            />
          </FormItem>

          {applicationErrors?.slice(0, 1).map((e, index) => {
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
              navigate('..');
            }}
          >
            Back
          </SecondaryButton>
          <PrimaryButton
            id="create-button"
            data-testid="create-button"
            className="w-32 flex-1"
            onClick={() => {
              onSubmit(form);
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
