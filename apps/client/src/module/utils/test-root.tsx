import { MockedResponse } from '@apollo/client/testing/core';
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import {
  createMemoryRouter,
  RouterProvider,
  useParams,
} from 'react-router-dom';
import ModalProvider from '@packages/ui/modal/modal-provider.tsx';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { CompanyProvider } from '@packages/core/company/company-provider.tsx';

function PathComponent() {
  const destination = useParams()['*'];

  return (
    <div>
      <div>navigated</div>
      <div data-testid="navigated">/{destination}</div>
    </div>
  );
}

export function TestRoot(props: {
  mocks: MockedResponse[];
  path?: string;
  initialEntries?: string;
  children: React.ReactNode;
}) {
  loadDevMessages();
  loadErrorMessages();

  const path = props.path ?? 'current';
  const router = createMemoryRouter(
    [
      {
        index: true,
        path: path,
        element: props.children,
      },
      {
        path: '*',
        element: <PathComponent />,
      },
    ],
    {
      initialEntries: [
        props.initialEntries ? props.initialEntries : '/current',
      ],
    }
  );

  return (
    <MockedProvider mocks={props.mocks} addTypename={false} showWarnings={true}>
      <CompanyProvider companyId="1">
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </CompanyProvider>
    </MockedProvider>
  );
}
