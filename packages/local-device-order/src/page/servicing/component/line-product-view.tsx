import { LineProduct } from '@packages/local-device-order/page/servicing/model/line-product.ts';
import { useLocalDevicePosOrderContext } from '@packages/local-device-order/logic/local-device-pos-context.ts';
import { MenuProductItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import { formatCurrency } from '@packages/core/utils/currency-formatter.ts';
import { useCompanyCurrency } from '@packages/core/company/company-context.ts';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import { useServicingStore } from '@packages/local-device-order/page/servicing/store/servicing-store.ts';
import { useCallback } from 'react';
import { calculateConfigurationPrice } from '@packages/local-device-order/page/servicing/logic/calculate-configuration-price.ts';
import { extractConfigurationValues } from '@packages/local-device-order/page/servicing/logic/extract-configuration-values.ts';
import { extractProductMenu } from '@packages/local-device-order/page/servicing/logic/extract-product-menu.ts';

const extractLineHeader = (productMenu: MenuProductItemFragment | null) => {
  return {
    title: productMenu?.title ?? 'Unknown',
    description: productMenu?.description ?? 'Unknown',
  };
};

const LineProductView = (props: { itemLine: LineProduct }) => {
  // Props
  const { itemLine } = props;
  const { menu } = useLocalDevicePosOrderContext();

  // Hooks
  const currency = useCompanyCurrency();
  const guest = useServicingStore((state) => state.selectedGuest);
  const removeLineFromCart = useServicingStore(
    (state) => state.removeLineProduct
  );

  // Data
  const productMenu = extractProductMenu(menu, itemLine.productID);
  const productMetadata = extractLineHeader(productMenu);
  const configurationValues = extractConfigurationValues(itemLine, productMenu);
  const { configurationPrice, total } = calculateConfigurationPrice(
    configurationValues,
    itemLine.quantity
  );

  // Logic
  const removeLineFromCartCallback = useCallback(() => {
    if (guest) {
      removeLineFromCart(itemLine.id, guest.id);
    }
  }, [guest, itemLine.id, removeLineFromCart]);

  return (
    <div className="bg-gray-100 rounded-lg m-2 min-h-1/5 p-4 pb-8">
      {/* Bill item content*/}
      <div className="flex flex-col justify-between w-full ">
        {/* Bill item title*/}
        <div className="max-w-[70%]">
          <div className=" line-clamp-2 font-semibold text-base h-12 ">
            {productMetadata.title}
          </div>

          <div>{productMetadata.description}</div>

          {configurationValues.map((configValue) => (
            <div key={configValue.id}>{configValue.name}</div>
          ))}
        </div>

        <div className="flex flex-col space-y-2">
          <div className="font-semibold text-lg">
            {formatCurrency(configurationPrice, currency)} x {itemLine.quantity}{' '}
            = {formatCurrency(total, currency)}
          </div>
          <SecondaryButton onClick={removeLineFromCartCallback}>
            Delete
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default LineProductView;
