import { useState } from 'react';
import PrimaryButton from 'ui/src/button/primary-button';
import { HandRaisedIcon } from '@heroicons/react/24/outline';
import MenuSelectionInput from 'ui/src/form/input/menu-selection-input';
import SecondaryButton from 'ui/src/button/secondary-button';
import { ContentType } from '@client/graphql/types/graphql';
import { useNavigate } from 'react-router-dom';

interface ContentData {
  id: string;
  name: string;
}

export default function CreateBannerButton() {
  const navigate = useNavigate();
  const data = getContentData();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contentData] = useState<ContentData[]>(data);
  const [contentType, setContentType] = useState<ContentData>(data[0]);

  const onSubmit = () => {
    navigate('create/' + contentType.id.toLowerCase());
  };

  return (
    <>
      <PrimaryButton
        onClick={() => {
          setShowModal(true);
        }}
      >
        Create new banner
      </PrimaryButton>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="bg-white py-8 px-6 rounded-lg flex gap-x-4 w-[500px] h-[180px]">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                  <HandRaisedIcon className="w-6 h-6" />
                </div>

                <div className="grow flex justify-start">
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Choose type of banner</p>
                    <MenuSelectionInput
                      title=""
                      data={contentData}
                      value={contentType}
                      onChange={setContentType}
                      build={(item) => {
                        return {
                          id: item.id,
                          name: item.name,
                        };
                      }}
                      className="-my-2 max-w-64 min-w-32"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <div className="flex gap-1">
                    <SecondaryButton onClick={() => {setShowModal(false)}}>
                      Cancel
                    </SecondaryButton>
                    <PrimaryButton onClick={() => {onSubmit()}}>
                      Done
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed -inset-4 bg-gray-500 opacity-75 transition-opacity z-40"></div>
        </>
      ) : null}
    </>
  );
}

function getContentData() {
  const contentData: ContentData[] = [];
  const contentDataEnumKey = Object.keys(ContentType);
  const contentDataEnumCValue = Object.values(ContentType);
  contentDataEnumKey.forEach((keyItem, index) =>
    contentData.push({
      id: keyItem,
      name: contentDataEnumCValue[index],
    })
  );
  return contentData;
}
