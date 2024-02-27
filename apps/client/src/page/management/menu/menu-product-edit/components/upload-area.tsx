import { useCallback } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useDropzone } from 'react-dropzone';

export default function UploadArea(props: {
  onUpload: (files: File[]) => void;
}) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      props.onUpload(acceptedFiles);
    },
    [props]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="h-40 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
      {...getRootProps()}
    >
      <div className="text-center">
        <PhotoIcon
          className="mx-auto h-12 w-12 text-gray-300"
          aria-hidden="true"
        />
        <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span>
              {isDragActive
                ? 'Upload a file or drag and drop'
                : 'Drop files here'}
            </span>
            <input {...getInputProps()}></input>
          </label>
          {/*<p className="pl-1">or drag and drop</p>*/}
        </div>
        <p className="text-xs leading-5 text-gray-600">PNG, JPG or WEBP</p>
      </div>
    </div>
  );
}
