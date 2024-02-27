import { Fragment, ReactNode } from 'react';
import {
  ModalManagerContext,
  useModalManager,
} from '@packages/ui/modal/modal-manager-context.ts';
import { Dialog, Transition } from '@headlessui/react';

export default function ModalProvider(props: { children?: ReactNode }) {
  const dialogManager = useModalManager();

  return (
    <ModalManagerContext.Provider value={dialogManager}>
      {props.children}
      <Transition.Root show={dialogManager.dialog != null} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30"
          onClose={() => {
            // dialogManager.closeDialog();
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                  {dialogManager.dialog != null && (
                    <div>{dialogManager.dialog}</div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </ModalManagerContext.Provider>
  );
}
