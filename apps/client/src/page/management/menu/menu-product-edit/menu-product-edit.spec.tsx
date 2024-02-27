import { MockedResponse } from '@apollo/client/testing';
import { TestRoot } from '@client/module/utils/test-root';
import { expect, describe, it, afterEach } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { GET_MENU_PRODUCT } from '@client/page/management/menu/menu-product-edit/logic/use-menu-product';
import { UPDATE_MENU_PRODUCT } from '@client/page/management/menu/menu-product-edit/logic/use-update-menu-product';
import MenuProductEdit from '@client/page/management/menu/menu-product-edit/menu-product-edit';
import userEvent from '@testing-library/user-event';
import { MockBaseResponse } from '@client/module/utils/mock-response';

const mocks: MockedResponse[] = [
  ...MockBaseResponse,
  {
    request: {
      query: GET_MENU_PRODUCT,
      variables: {
        id: '1',
      },
    },
    result: {
      data: {
        menuProduct: {
          __typename: 'MenuProduct',
          id: '1',
          title: 'Coca Cola',
          description: 'Super Comfortable',
          images: ['/image/coca-cola.webp'],
          enabled: true,
          ingredients: ['water', 'sugar', 'secret'],
          section: {
            __typename: 'MenuSection',
            id: 'soft-drink',
            name: 'Soft drink',
            description:
              'Indulge in our delightful soft drinks, effervescent and bursting with flavor.',
          },
          configurations: [
            {
              __typename: 'MenuProductConfiguration',
              id: 'coca',
              title: '',
              type: 'BASE',
              values: [
                {
                  id: 'coca-default',
                  name: '',
                  price: 299,
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: UPDATE_MENU_PRODUCT,
      variables: {
        id: '1',
        input: {
          description: 'Super sweet',
          enabled: false,
          images: ['/image/coca-cola.webp'],
          ingredients: ['water', 'sugar', 'secret'],
          title: 'Pepsi',
        },
      },
    },
    result: {
      data: {
        updateMenuProduct: {
          id: '1',
        },
      },
    },
  },
];

describe("Menu's Product Edit Page", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should be able to render menu's product edit page", async () => {
    render(
      <TestRoot mocks={mocks} path=":productId" initialEntries="/1">
        <MenuProductEdit />
      </TestRoot>
    );

    expect(await screen.findByTestId('title-input')).toBeInTheDocument();
    expect(await screen.findByTestId('description-input')).toBeInTheDocument();

    expect(await screen.findByDisplayValue('Coca Cola')).toBeInTheDocument();
    expect(
      await screen.findByDisplayValue('Super Comfortable')
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId('/image/coca-cola.webp')
    ).toBeInTheDocument();
  });

  it('Should be able to create a menu config value and go back', async () => {
    render(
      <TestRoot mocks={mocks} path=":productId" initialEntries="/1">
        <MenuProductEdit />
      </TestRoot>
    );

    await userEvent.clear(await screen.findByTestId('title-input'));
    await userEvent.type(await screen.findByTestId('title-input'), 'Pepsi');
    await userEvent.clear(await screen.findByTestId('description-input'));
    await userEvent.type(
      await screen.findByTestId('description-input'),
      'Super sweet'
    );
    await userEvent.click(await screen.findByTestId('product-active-toggle'));

    await userEvent.click(await screen.findByTestId('update-button'));

    // After navigating
    const component = within(screen.getByTestId('navigated'));
    expect(component.getByText('/')).toBeInTheDocument();
  });
});
