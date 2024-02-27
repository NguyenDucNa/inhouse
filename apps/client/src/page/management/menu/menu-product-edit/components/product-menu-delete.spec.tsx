import { MockedResponse } from '@apollo/client/testing';
import { TestRoot } from '@client/module/utils/test-root';
import { render, screen, within, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, afterEach } from 'vitest';
import { MENU_SECTION_QUERY } from '@client/page/management/menu/menu-section-edit/logic/use-get-menu-section.ts';
import { MockBaseResponse } from '@client/module/utils/mock-response';
import { DELETE_MENU_PRODUCT } from '../logic/use-delete-menu-product';
import ProductMenuDelete from './product-menu-delete';

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
          name: 'Ice cream',
          description: 'Choose your favorite taste',
        },
      },
    },
  },
  {
    request: {
      query: DELETE_MENU_PRODUCT,
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

  it('Should be able to render the menu product delete page', async () => {
    render(
      <TestRoot mocks={mocks}>
        <ProductMenuDelete productId={':productId'} />
      </TestRoot>
    );

    expect(await screen.findByTestId('delete-button')).toBeInTheDocument();
  });

  it('Should be able to delete a menu product', async () => {
    render(
      <TestRoot mocks={mocks}>
        <ProductMenuDelete productId={'abc-def-123'} />
      </TestRoot>
    );
    await userEvent.click(await screen.findByTestId('delete-button'));
    await userEvent.click(await screen.findByTestId('delete-confirm'));

    // After navigating
    const component = within(screen.getByTestId('navigated'));
    expect(component.getByText('/')).toBeInTheDocument();
  });
});
