import { useParams } from 'react-router-dom';
import useLocalDeviceOrderBackState from '../logic/use-local-device-back-state';
import useLocalDeviceOrderNextState from '../logic/use-local-device-next-state';

export default function OrderStateTransfer() {
  const { orderId } = useParams();
  const [nextState] = useLocalDeviceOrderNextState();
  const [backState] = useLocalDeviceOrderBackState();

  return (
    <div className="flex gap-4 m-2">
      <button
        className="p-4 border border-gray-300"
        onClick={() => {
          backState({
            variables: {
              orderId: orderId ?? '',
            },
          })
            .then(() => {
              console.log('Success');
            })
            .catch(() => {
              console.log('Failed');
            });
        }}
      >
        {'<'}
      </button>

      <button
        className="p-4 border border-gray-300"     
        onClick={() => {
          nextState({
            variables: {
              orderId: orderId ?? '',
            },
          })
            .then(() => {
              console.log('Success');
            })
            .catch(() => {
              console.log('Failed');
            });
        }}
      >
        {'>'}
      </button>
    </div>
  );
}
