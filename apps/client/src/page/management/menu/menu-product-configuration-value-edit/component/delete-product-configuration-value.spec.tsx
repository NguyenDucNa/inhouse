import { MockedResponse } from '@apollo/client/testing';
import { TestRoot } from '@client/module/utils/test-root';
import { render, screen, within, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, afterEach } from 'vitest';
import { MENU_SECTION_QUERY } from '@client/page/management/menu/menu-section-edit/logic/use-get-menu-section.ts';
import { MockBaseResponse } from '@client/module/utils/mock-response.ts';
import { DELETE_MENU_PRODUCT_CONFIGURATION_VALUE } from '../logic/use-delete-menu-product-configuration-value';
import DeleteProductConfigurationValueMenu from './delete-product-configuration-value';

const mocks: MockedResponse[] = [
  ...MockBaseResponse,
  {
    request: {
      query: MENU_SECTION_QUERY,
      variables: {
        id: 'abc-def-123',
      },
    },
    result: {
      data: {
        menuSection: {
          id: 'abc-def-123',
          name: 'Other 2',
          description: 'additions and etc.',
        },
      },
    },
  },
  {
    request: {
      query: DELETE_MENU_PRODUCT_CONFIGURATION_VALUE,
      variables: {
        id: 'abc-def-123',
      },
    },
    result: {
      data: {
        deleteMenuSection: true,
      },
    },
  },
];

describe('Menu Section Delete Page', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should be able to render the menu product configuration value delete page', async () => {
    render(
      <TestRoot mocks={mocks}>
        <DeleteProductConfigurationValueMenu valueId={':valueId'} />
      </TestRoot>
    );

    expect(await screen.findByTestId('delete-button')).toBeInTheDocument();
  });

  it('Should be able to delete a menu product configuration value', async () => {
    render(
      <TestRoot mocks={mocks}>
        <DeleteProductConfigurationValueMenu valueId={'abc-def-123'} />
      </TestRoot>
    );
    await userEvent.click(await screen.findByTestId('delete-button'));

    // After navigating
    const component = within(screen.getByTestId('navigated'));
    expect(component.getByText('/')).toBeInTheDocument();
  });
});
