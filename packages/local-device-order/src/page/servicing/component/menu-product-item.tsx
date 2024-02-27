import { MenuProductItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import { formatCurrency } from '@packages/core/utils/currency-formatter.ts';
import { useCompanyCurrency } from '@packages/core/company/company-context.ts';
import { getFragmentData } from '@packages/local-device-order/graphql/types';
import { MenuProductConfigurationFragment } from '@packages/network-graphql/common/menu-product-configuration-fragment.ts';
import { ProductConfigurationType } from '@packages/network-graphql/graphql/types/graphql.ts';
import { useCallback } from 'react';
import { LineProductImpl } from '@packages/local-device-order/page/servicing/model/line-product.ts';
import { MenuProductConfigurationValueFragment } from '@packages/network-graphql/common/menu-product-configuration-value-fragment.ts';
import { useAddToCart } from '@packages/local-device-order/page/servicing/hook/use-add-cart.ts';
import { PlusIcon } from '@heroicons/react/20/solid';
import { useDialog } from '@packages/ui/modal/use-dialog.tsx';
import ConfigurationSetupView from '@packages/local-device-order/page/servicing/component/configuration-setup/configuration-setup-view.tsx';

const MenuProductItem = (props: { productItem: MenuProductItemFragment }) => {
  const { productItem } = props;

  // Hooks
  const dialog = useDialog();

  // Data

  // @ts-expect-error TODO: wrap into config
  const env = import.meta.env as { VITE_CDN_HOST: string };
  const host: string = env.VITE_CDN_HOST;

  const currency = useCompanyCurrency();

  const baseConfiguration = productItem.configurations
    .map((itemFragment) =>
      getFragmentData(MenuProductConfigurationFragment, itemFragment)
    )
    .find((item) => item.type === ProductConfigurationType.Base);

  const minBasePrice = Math.min(
    ...(baseConfiguration?.values
      .map((e) => getFragmentData(MenuProductConfigurationValueFragment, e))
      .map((item) => item.price) ?? [])
  );

  // Logic
  const addToCart = useAddToCart();
  const handleAddToCart = useCallback(() => {
    if (!baseConfiguration) {
      return;
    }
    switch (baseConfiguration.values.length) {
      case 0:
        return;
      case 1:
        addToCart(
          new LineProductImpl(
            productItem.id,
            baseConfiguration.values
              .map((e) =>
                getFragmentData(MenuProductConfigurationValueFragment, e)
              )
              .map((e) => e.id),
            1
          )
        );
        return;
      default:
        dialog.showComponent((onClose) => {
          return (
            <ConfigurationSetupView
              menuProduct={productItem}
              addProductToCart={(line) => {
                addToCart(line);
              }}
              onClose={onClose}
            />
          );
        });
        return;
    }
  }, [addToCart, baseConfiguration, dialog, productItem]);

  if (!baseConfiguration) {
    return <div>Product is unavailable</div>;
  }

  return (
    <div className="max-w-2xl mx-auto ">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 h-[360px] 2xl:h-[450px] w-[19vw] xl:w-[20vw] 2xl:w-[16vw]">
        <img
          className="object-cover rounded-t-lg p-3 w-full h-3/5  "
          src={host + productItem.images[0]}
          alt={productItem.title}
        />

        <div className="px-5 pb-4 flex flex-col justify-center h-2/5">
          <a href="#">
            <h3 className="w-full text-gray-900 font-semibold text-sm 2xl:text-base tracking-tight dark:text-white line-clamp-2 h-10 2xl:h-12 ">
              {productItem.title}
            </h3>
          </a>

          <div className=" mt-2 mb-2 grow flex content-center">
            <p className="italic text-gray-500 text-xs h-8 line-clamp-2">
              {productItem.description}
            </p>
          </div>

          <div className="flex items-bottom items-end justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(minBasePrice, currency)}
            </span>
            <button
              onClick={handleAddToCart}
              className="text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800"
            >
              <div className="w-6 h-6">
                <PlusIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuProductItem;
