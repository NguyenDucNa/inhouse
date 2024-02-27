import { expect, describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import MenuCreate from '@client/page/management/menu/menu-create/menu-create.tsx';
import { MockedResponse } from '@apollo/client/testing/core';
import { CREATE_MENU_MUTATION } from '@client/page/management/menu/menu-create/logic/use-create-menu.ts';
import userEvent from '@testing-library/user-event';
import { TestRoot } from '@client/module/utils/test-root.tsx';
import { MockBaseResponse } from '@client/module/utils/mock-response.ts';

const mocks: MockedResponse[] = [
  ...MockBaseResponse,
  {
    request: {
      query: CREATE_MENU_MUTATION,
      variables: {
        companyId: '1',
        input: { title: 'Menu 1' },
      },
    },
    result: {
      data: {
        createMenu: {
          id: '1234-sdfg-9876',
          title: 'Menu 1',
        },
      },
    },
  },
];

describe('Menu Create Page', () => {
  it('Should be able to render the menu page', async () => {
    render(
      <TestRoot mocks={mocks}>
        <MenuCreate />
      </TestRoot>
    );

    expect(await screen.findByTestId('create-button')).toBeInTheDocument();
    expect(await screen.findByTestId('title-input')).toBeInTheDocument();
  });

  it('Should be able to create a menu and go back', async () => {
    render(
      <TestRoot mocks={mocks}>
        <MenuCreate />
      </TestRoot>
    );

    await userEvent.type(await screen.findByTestId('title-input'), 'Menu 1');
    await userEvent.click(await screen.findByTestId('create-button'));

    // After navigating
    const component = within(screen.getByTestId('navigated'));
    expect(component.getByText('/')).toBeInTheDocument();
  });
});
