import { MockedResponse } from '@apollo/client/testing/core';
import { expect, describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';
import { TestRoot } from '@client/module/utils/test-root.tsx';
import { MockBaseResponse } from '@client/module/utils/mock-response.ts';
import { CREATE_MENU_PRODUCT_CONFIGURATION_VALUE } from './logic/use-create-menu-product-configuration';
import MenuProductConfigurationValueCreate from './menu-product-configuration-value-create';

const mocks: MockedResponse[] = [
  ...MockBaseResponse,
  {
    request: {
      query: CREATE_MENU_PRODUCT_CONFIGURATION_VALUE,
      variables: {
        menuProductConfigurationId: '1234-ghjk-9876',
        input: {
          name: 'Full Ice',
          price: 1200,
        },
      },
    },
    result: {
      data: {
        createMenuProductConfigurationValue: {
          id: 'default',
          name: 'Full Ice',
          price: 1200,
        },
      },
    },
  },
];

describe('Menu Configuration Value Create Page', () => {
  it('Should be able to render the menu config value create page', async () => {
    render(
      <TestRoot
        mocks={mocks}
        initialEntries="/1234-ghjk-9876"
        path=":configurationId"
      >
        <MenuProductConfigurationValueCreate />
      </TestRoot>
    );

    expect(await screen.findByTestId('create-button')).toBeInTheDocument();
    expect(await screen.findByTestId('name-input')).toBeInTheDocument();
    expect(await screen.findByTestId('price-input')).toBeInTheDocument();
  });

  it('Should be able to create a menu config value and go back', async () => {
    render(
      <TestRoot
        mocks={mocks}
        initialEntries="/1234-ghjk-9876"
        path=":configurationId"
      >
        <MenuProductConfigurationValueCreate />
      </TestRoot>
    );

    await userEvent.type(await screen.findByTestId('name-input'), 'Full Ice');
    await userEvent.type(await screen.findByTestId('price-input'), '12');
    await userEvent.click(await screen.findByTestId('create-button'));

    // After navigating
    const component = within(screen.getByTestId('navigated'));
    expect(component.getByText('/')).toBeInTheDocument();
  });
});
