import { useNavigate } from 'react-router-dom';

const LocalDevicePosStarting = () => {
  const navigate = useNavigate();

  return (
    <div className="min-w-full min-h-screen flex justify-center items-center">
      <div className="w-1/2 h-96 border border-black">
        <div className="flex justify-center h-1/2 items-center">
          <p className="text-4xl">Xin mời chọn thao tác</p>
        </div>

        <div className="flex gap-8 justify-center">
          <button
            className="px-8 py-4 rounded-md border-black border-2"
            onClick={() => {
              navigate('continue');
            }}
          >
            Continue
          </button>
          <button
            className="px-8 py-4 rounded-md bg-red-500 text-white"
            onClick={() => {
              navigate('create');
            }}
          >
            Create new
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocalDevicePosStarting;
