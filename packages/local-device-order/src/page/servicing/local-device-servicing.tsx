import { useLocalDevicePosOrderContext } from '@packages/local-device-order/logic/local-device-pos-context.ts';
import classNames from 'classnames';
import FromMenuItemFragmentToSections from '@packages/local-device-order/page/servicing/logic/from-menu-to-sections.ts';
import { MenuSections } from '@packages/local-device-order/page/servicing/component/menu-sections.tsx';
import MenuProducts from '@packages/local-device-order/page/servicing/component/menu-products.tsx';
import { MenuProductFragment } from '@packages/network-graphql/common/menu-product-fragment.ts';
import { getFragmentData } from '@packages/local-device-order/graphql/types';
import CartDetail from '@packages/local-device-order/page/servicing/component/cart-detail.tsx';
import { useEffect } from 'react';
import { useServicingStore } from '@packages/local-device-order/page/servicing/store/servicing-store.ts';

const LocalDeviceServicing = () => {
  const orderContext = useLocalDevicePosOrderContext();
  const menu = orderContext.menu;

  const setupStore = useServicingStore((state) => state.setup);
  useEffect(() => {
    setupStore({
      orderId: orderContext.orderState.id,
      guests: orderContext.orderState.data.guests,
    });
  }, [
    orderContext.orderState.data.guests,
    orderContext.orderState.id,
    setupStore,
  ]);

  const description = 'Thực đơn đặc biệt với giá ưu đãi vào ngày chủ nhật';
  const sections = FromMenuItemFragmentToSections(menu);
  const menuProducts = getFragmentData(MenuProductFragment, menu.menuProducts);

  // const { isScrolled } = useScroll();

  return (
    <div className="font-mono ">
      {/* menu */}
      <div className="inline-block w-[68%] xl:w-[70%] 2xl:w-[75%] bg-gray-100 px-8 ">
        {/* Menu header */}
        <div
          className={classNames(
            'sticky top-0 bg-gray-100 left-0 right-[32%] xl:right-[30%] 2xl:right-[25%] p-4 2xl:p-8'
            // { '2xl:p-3 xl:p-4': isScrolled }
          )}
        >
          <div
            className={classNames(
              'flex place-content-between pt-8 pb-8 mb-2 2xl:mb-4'
              // { 'absolute opacity-0 -z-10': isScrolled }
            )}
          >
            <MenuHeader title={menu.title} description={description} />
          </div>

          <MenuSections sections={sections} />
          <MenuProducts sections={sections} products={menuProducts} />
        </div>
      </div>

      <div className="inline-block w-[32%] xl:w-[30%] 2xl:w-[25%] h-full bg-white fixed">
        <CartDetail />
      </div>
    </div>
  );
};

const MenuHeader = (props: { title: string; description: string }) => {
  return (
    <div className="">
      <h1 className="font-bold text-2xl 2xl:text-3xl">{props.title}</h1>
      <p className="text-xs text-gray-500 2xl:text-sm">{props.description}</p>
    </div>
  );
};

export default LocalDeviceServicing;
