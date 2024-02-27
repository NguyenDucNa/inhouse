import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMenuProduct } from '@client/page/management/menu/menu-product-edit/logic/use-menu-product';
import { useUpdateMenuProduct } from '@client/page/management/menu/menu-product-edit/logic/use-update-menu-product';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error';
import { getFragmentData } from '@client/graphql/types';
import CardContent from '@packages/ui/card/card-content';
import Center from '@packages/ui/center';
import Spinner from '@packages/ui/spinner';
import FormLayout from '@packages/ui/form/form-layout';
import TextInput from '@packages/ui/form/input/text-input';
import FormItem from '@packages/ui/form/form-item';
import Card from '@packages/ui/card/card';
import CardHeader from '@packages/ui/card/card-header';
import AlertError from '@packages/ui/alert/alert-error';
import CardFooter from '@packages/ui/card/card-footer';
import SecondaryButton from '@packages/ui/button/secondary-button';
import PrimaryButton from '@packages/ui/button/primary-button';
import useFormData from '@client/module/utils/use-form-data';
import ToggleInput from '@packages/ui/form/input/toggle-input';
import ProductMenuDelete from '@client/page/management/menu/menu-product-edit/components/product-menu-delete';
import ProductImagesEdit from '@client/page/management/menu/menu-product-edit/components/product-images-edit';
import { MenuProductFragment } from '@packages/network-graphql/common/menu-product-fragment.ts';
import MenuSectionSelection from '@client/page/management/menu/menu-section/menu-section-selection-input/menu-section-selection.tsx';

interface FormData {
  title: string;
  description: string;
  images: string[];
  enabled: boolean;
  ingredients: string[];
  sectionId: string | null;
}

export default function MenuProductEdit() {
  const productId = useParams().productId ?? '';
  const navigate = useNavigate();

  const {
    data: form,
    setData,
    handle,
    manualHandle,
  } = useFormData<FormData>({
    title: '',
    description: '',
    images: [''],
    ingredients: [''],
    enabled: false,
    sectionId: null,
  });

  const { data, loading, error: loadingError } = useMenuProduct(productId);

  const [update, { loading: updating, error: updateError }] =
    useUpdateMenuProduct();

  const error = loadingError ?? updateError;
  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const menuProduct = getFragmentData(MenuProductFragment, data?.menuProduct);

  useEffect(() => {
    if (menuProduct) {
      setData({
        enabled: menuProduct.enabled,
        title: menuProduct.title,
        description: menuProduct.description,
        images: menuProduct.images,
        ingredients: menuProduct.ingredients,
        sectionId: menuProduct.sectionId,
      });
    }
  }, [menuProduct, setData]);

  const submit = useCallback(() => {
    update({ variables: { id: productId, input: form } })
      .then(() => {
        navigate('..');
      })
      .catch((e) => void e);
  }, [productId, form, navigate, update]);

  if (!menuProduct) {
    if (loading) {
      return (
        <Center>
          <Spinner />
        </Center>
      );
    } else {
      return <div>Product not found</div>;
    }
  }

  return (
    <div className="space-y-4 ">
      <Card>
        <CardHeader title="Edit Menu's Product" />

        <CardContent>
          <FormLayout>
            <FormItem title={'Title'} className="max-w-md">
              <TextInput
                data-testid="title-input"
                type="text"
                label="title"
                value={form.title}
                name="title"
                placeholder="Title"
                error={validationError.title}
                onChange={handle}
              />
            </FormItem>

            <FormItem title={'Description'} className="max-w-md">
              <TextInput
                data-testid="description-input"
                type="text"
                label="description"
                value={form.description}
                name="description"
                placeholder="description"
                error={validationError.title}
                onChange={handle}
              />
            </FormItem>

            <MenuSectionSelection
              menuId={menuProduct.menuId}
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
                data-testid="product-active-toggle"
              />
            </FormItem>

            {error && (
              <AlertError
                className="mt-4"
                title={error.name}
                message={error.message}
              />
            )}
          </FormLayout>
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
            data-testid="update-button"
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
          <ProductMenuDelete productId={productId} />
        </CardContent>
      </Card>
    </div>
  );
}
