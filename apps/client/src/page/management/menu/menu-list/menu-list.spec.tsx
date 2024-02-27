import { expect, describe, it, afterEach } from 'vitest';
import '@testing-library/jest-dom';
import { cleanup, render, screen, within } from '@testing-library/react';
import MenuList from '@client/page/management/menu/menu-list/menu-list.tsx';
import { MockedResponse } from '@apollo/client/testing/core';
import { MENU_LIST_QUERY } from '@client/page/management/menu/menu-list/logic/use-menu-list';
import userEvent from '@testing-library/user-event';
import { TestRoot } from '@client/module/utils/test-root.tsx';
import { MockBaseResponse } from '@client/module/utils/mock-response.ts';

const mocks: MockedResponse[] = [
  ...MockBaseResponse,
  {
    request: {
      query: MENU_LIST_QUERY,
      variables: {
        companyId: '1',
      },
    },
    result: {
      data: {
        menus: [
          {
            id: 'default',
            title: 'Standard Sushi Menu',
          },
          {
            id: '05da0b0f-51bd-4d1d-8756-ed4fe2b9cda9',
            title: 'Luna',
          },
        ],
      },
    },
  },
];

describe('Menu List Page', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should be able to render the menu list', async () => {
    render(
      <TestRoot mocks={mocks}>
        <MenuList />
      </TestRoot>
    );
    expect(await screen.findByTestId('list-create-button')).toBeInTheDocument();
    expect(await screen.findByText('Standard Sushi Menu')).toBeInTheDocument();
    expect(await screen.findByText('Luna')).toBeInTheDocument();
  });

  it('Should be able to re-render the page', async () => {
    render(
      <TestRoot mocks={mocks}>
        <MenuList />
      </TestRoot>
    );

    expect(await screen.findByTestId('list-create-button')).toBeInTheDocument();
    await userEvent.click(await screen.findByTestId('list-create-button'));

    // After navigating
    const component = within(screen.getByTestId('navigated'));
    expect(component.getByText('/current/create')).toBeInTheDocument();
  });
});
