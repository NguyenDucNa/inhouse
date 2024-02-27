import { MenuSection } from '@packages/local-device-order/page/servicing/model/menu-section.ts';
import { MenuProductItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import MenuProductItem from '@packages/local-device-order/page/servicing/component/menu-product-item.tsx';
import { MenuSectionFragment } from '@packages/network-graphql/common/menu-section-fragment.ts';
import { getFragmentData } from '@packages/local-device-order/graphql/types';

const MenuProducts = (props: {
  products: readonly MenuProductItemFragment[];
  sections: MenuSection[];
}) => {
  const { sections, products } = props;

  return (
    <div className="p-4 pt-0 2xl:p-8 2xl:pt-0 2xl:mt-[0px] mt-[8px]">
      {sections.map((section) => (
        <div key={section.id}>
          <h1 className="p-2 pt-8 tracking-widest text-xl font-semibold text-gray-800 col-span-3 2xl:col-span-4">
            {section.name}
          </h1>
          <div className="grid grid-cols-3 2xl:grid-cols-4 gap-4 mt-1 space-x-4">
            {products
              .filter((product) => {
                const productSection = getFragmentData(
                  MenuSectionFragment,
                  product.section
                );
                return productSection?.id === section.id;
              })
              .map((productItem) => {
                return (
                  <div key={productItem.id}>
                    <MenuProductItem productItem={productItem} />
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuProducts;
