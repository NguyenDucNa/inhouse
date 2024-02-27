import { useCallback, useState } from 'react';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import Spinner from '@packages/ui/spinner.tsx';
import UploadArea from './upload-area';
import { uploadImage } from './upload-image';

function BannerImagesEdit(props: {
  image: string;
  onChange: (image: string) => void;
}) {
  const { image, onChange } = props;

  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const upload = useCallback(
    (uploadingImages: File[]) => {
      setUploading(true);

      Promise.all(uploadingImages.map((file) => uploadImage(file)))
        .then((newImages) => {
          onChange(newImages[0].data.preSignUpload.originPath);
        })
        .catch((e) => {
          if (e instanceof Error) {
            setError(e);
          }
        })
        .finally(() => {
          setUploading(false);
        });
    },
    [onChange]
  );

  return (
    <div className="pb-8 border-b border-gray-900/10">
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Photo
        </label>

        {error && <AlertError title={error.name} message={error.message} />}

        <div className="flex overflow-x-auto">
          {uploading ? (
            <div className="w-80 h-40 flex items-center justify-center">
              <div className="flex-col items-center justify-center justify-self-center content-center">
                <Spinner />
                <p className="-ml-5 mt-2 text-gray-400">Uploading</p>
              </div>
            </div>
          ) : (
            <UploadArea onUpload={upload} />
          )}

          <div className="mt-2 ml-2 flex">
            <img
              key={props.image}
              data-testid={props.image}
              alt="preview"
              src={import.meta.env.VITE_CDN_HOST + "/" + image}
              className="w-40 h-40 mr-2 object-cover rounded-lg border border-gray-900/25"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerImagesEdit;
