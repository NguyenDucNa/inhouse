import { MockedResponse } from '@apollo/client/testing';
import { TestRoot } from '@client/module/utils/test-root';
import { render, screen, within, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, vi, afterEach } from 'vitest';
import { GET_MENU_PRODUCT_CONFIGURATION_VALUE } from '@client/page/management/menu/menu-product-configuration-value-edit/logic/use-menu-product-configuration-value.ts';
import { DELETE_MENU_PRODUCT_CONFIGURATION_VALUE } from '@client/page/management/menu/menu-product-configuration-value-edit/logic/use-delete-menu-product-configuration-value.ts';
import { MockBaseResponse } from '@client/module/utils/mock-response';
import { UPDATE_MENU_PRODUCT_CONFIGURATION_VALUE } from './logic/use-update-menu-product-configuration';
import MenuProductConfigurationValueEdit from './menu-product-configuration-value-edit';

const mocks: MockedResponse[] = [
  ...MockBaseResponse,
  {
    request: {
      query: GET_MENU_PRODUCT_CONFIGURATION_VALUE,
      variables: {
        id: '1234-sdfgh-9000',
      },
    },
    result: {
      data: {
        menuProductConfigurationValue: {
          id: '1234-sdfgh-9000',
          name: 'Add suga',
          price: 1100,
        },
      },
    },
  },
  {
    request: {
      query: UPDATE_MENU_PRODUCT_CONFIGURATION_VALUE,
      variables: {
        id: '1234-sdfgh-9000',
        input: {
          name: 'Add sugar',
          price: 1200,
        },
      },
    },
    result: {
      data: {
        updateMenuProductConfigurationValue: {
          id: '1234-sdfgh-9000',
          name: 'Add sugar',
          price: 1200,
        },
      },
    },
  },
  {
    request: {
      query: DELETE_MENU_PRODUCT_CONFIGURATION_VALUE,
      variables: {
        id: '1234-sdfgh-9000',
      },
    },
    result: {
      data: {
        deleteMenuProductConfigurationValue: {
          id: '1234-sdfgh-9000',
        },
      },
    },
  },
];

describe('Menu Product Config Value Edit Page', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('Should be able to render the menu product config value page', async () => {
    render(
      <TestRoot mocks={mocks} path=":valueId" initialEntries="/1234-sdfgh-9000">
        <MenuProductConfigurationValueEdit />
      </TestRoot>
    );

    expect(await screen.findByTestId('save-button')).toBeInTheDocument();
    expect(await screen.findByTestId('name-input')).toBeInTheDocument();
    expect(await screen.findByTestId('price-input')).toBeInTheDocument();

    expect(await screen.findByTestId('name-input')).toHaveValue('Add suga');
    expect(await screen.findByTestId('price-input')).toHaveValue(11);
  });

  it('Should be able to edit a menu product config value', async () => {
    render(
      <TestRoot mocks={mocks} path=":valueId" initialEntries="/1234-sdfgh-9000">
        <MenuProductConfigurationValueEdit />
      </TestRoot>
    );

    await userEvent.clear(await screen.findByTestId('name-input'));
    await userEvent.type(await screen.findByTestId('name-input'), 'Add sugar');
    //
    await userEvent.clear(await screen.findByTestId('price-input'));
    await userEvent.type(await screen.findByTestId('price-input'), '12');

    await userEvent.click(await screen.findByTestId('save-button'));

    // After navigating
    const component = within(screen.getByTestId('navigated'));
    expect(component.getByText('/')).toBeInTheDocument();
  });
});
