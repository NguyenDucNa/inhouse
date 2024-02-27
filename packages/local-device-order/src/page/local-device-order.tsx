import { useParams } from 'react-router-dom';
import Spinner from '@packages/ui/spinner.tsx';
import useLocalDevicePosState from '@packages/local-device-order/logic/use-local-device-pos-state.ts';
import useLocalDevicePosOrderStateUpdateSubscribe from '@packages/local-device-order/logic/use-local-device-pos-subscribe.ts';
import { getFragmentData } from '@packages/local-device-order/graphql/types';
import { LocalDeviceStateFragment } from '@packages/local-device-order/graphql/local-device-order-fragment.ts';
import {
  LocalDevicePosOrderContext,
  LocalDevicePosOrderContextData,
} from '@packages/local-device-order/logic/local-device-pos-context.ts';
import { MenuFragment } from '@packages/network-graphql/common/menu-fragment.ts';
import LocalDeviceServicing from '@packages/local-device-order/page/servicing/local-device-servicing.tsx';
import LocalDeviceOrderReview from '@packages/local-device-order/page/review/local-device-order-review.tsx';
import LocalDeviceOrderCreateInvoice from './preparingInvoice/local-device-order-create-invoice';
import InvoiceList from './done/Invoice-list';

const LocalDeviceOrder = () => {
  const orderId = useParams().orderId;

  const {
    data: _initialData,
    loading,
    error,
  } = useLocalDevicePosState(orderId);

  const { data: _updatedData } =
    useLocalDevicePosOrderStateUpdateSubscribe(orderId);

  if (!orderId) {
    return <div>Order ID not found</div>;
  }

  if (loading) {
    return <Spinner />;
  }

  if (!_initialData) {
    return <div>Order not found</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let data = getFragmentData(
    LocalDeviceStateFragment,
    _initialData.localDeviceOrder
  );

  if (_updatedData?.localDeviceOrderUpdateSubscribe) {
    data = getFragmentData(
      LocalDeviceStateFragment,
      _updatedData.localDeviceOrderUpdateSubscribe
    );
  }

  const provider: LocalDevicePosOrderContextData = {
    orderState: data,
    menu: getFragmentData(MenuFragment, data.menu),
  };

  return (
    <LocalDevicePosOrderContext.Provider value={provider}>
      {OrderProcess(data.state)}
    </LocalDevicePosOrderContext.Provider>
  );
};

function OrderProcess(orderState: string) {
  switch (orderState) {
    case 'servicing': {
      return <LocalDeviceServicing />;
    }
    case 'waitingForPayment':
      return <div>Waiting for payment</div>;
    case 'orderReview':
      return <LocalDeviceOrderReview />;
    case 'preparingInvoice':
      return <LocalDeviceOrderCreateInvoice />;
    case 'done':
      return <InvoiceList />;
    case 'cancelled':
      return <div>Order was cancelled</div>;
    default: {
      console.error('Invalid state', orderState);
      return <div>Invalid state</div>;
    }
  }
}

export default LocalDeviceOrder;
