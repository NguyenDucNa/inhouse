import { MenuProductItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import Card from '@packages/ui/card/card.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import CardFooter from '@packages/ui/card/card-footer.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import { getFragmentData } from '@packages/local-device-order/graphql/types';
import { MenuProductConfigurationFragment } from '@packages/network-graphql/common/menu-product-configuration-fragment.ts';
import ConfigurationValues from '@packages/local-device-order/page/servicing/component/configuration-setup/component/configuration-values.tsx';
import { ConfigurationSetupProvider } from '@packages/local-device-order/page/servicing/component/configuration-setup/provider/configuration-setup-store-provider.tsx';
import ConfigurationSetupAddToCart from '@packages/local-device-order/page/servicing/component/configuration-setup/component/configuration-setup-add-to-cart.tsx';
import { LineProduct } from '@packages/local-device-order/page/servicing/model/line-product.ts';

const ConfigurationSetupView = (props: {
  menuProduct: MenuProductItemFragment;
  addProductToCart: (line: LineProduct) => void;
  onClose: () => void;
}) => {
  const { menuProduct, onClose, addProductToCart } = props;

  return (
    <ConfigurationSetupProvider menuProduct={menuProduct}>
      <Card>
        <CardHeader title={menuProduct.title} />
        <CardContent>
          <div className="flex flex-col space-y-6">
            {menuProduct.configurations.map((itemFragment) => {
              const productConfiguration = getFragmentData(
                MenuProductConfigurationFragment,
                itemFragment
              );
              return (
                <div key={productConfiguration.id} className="divide-y">
                  <ConfigurationValues
                    productConfiguration={productConfiguration}
                  />
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter>
          <ConfigurationSetupAddToCart
            menuProduct={menuProduct}
            addProductToCart={addProductToCart}
          />
          <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        </CardFooter>
      </Card>
    </ConfigurationSetupProvider>
  );
};

export default ConfigurationSetupView;
