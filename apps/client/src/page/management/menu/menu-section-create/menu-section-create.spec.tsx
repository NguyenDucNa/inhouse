import { MockedResponse } from '@apollo/client/testing/core';
import { CREATE_MENU_SECTION } from '@client/page/management/menu/menu-section-create/logic/use-create-menu-section.ts';
import { expect, describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';
import { GET_MENU_DETAIL } from '@client/page/management/menu/menu-detail/logic/use-get-menu.ts';
import { TestRoot } from '@client/module/utils/test-root.tsx';
import { MockBaseResponse } from '@client/module/utils/mock-response.ts';
import MenuSectionCreate from './menu-section-create';

const mocks: MockedResponse[] = [
  ...MockBaseResponse,
  {
    request: {
      query: GET_MENU_DETAIL,
      variables: {
        id: 'default',
      },
    },
    result: {
      data: {
        menu: {
          id: 'default',
          title: 'Standard Sushi Menu',
        },
      },
    },
  },
  {
    request: {
      query: CREATE_MENU_SECTION,
      variables: {
        menuId: 'default',
        input: { name: 'Section 1', description: 'section description' },
      },
    },
    result: {
      data: {
        createMenuSection: {
          id: 'default',
          name: 'Section 1',
          description: 'section description',
        },
      },
    },
  },
];

describe('Menu Section Create Page', () => {
  it('Should be able to render the menu section page', async () => {
    render(
      <TestRoot mocks={mocks}>
        <MenuSectionCreate />
      </TestRoot>
    );

    expect(await screen.findByTestId('create-button')).toBeInTheDocument();
    expect(await screen.findByTestId('name-input')).toBeInTheDocument();
    expect(await screen.findByTestId('description-input')).toBeInTheDocument();
  });

  it('Should be able to create a menu section and go back', async () => {
    render(
      <TestRoot mocks={mocks}>
        <MenuSectionCreate />
      </TestRoot>
    );

    await userEvent.type(await screen.findByTestId('name-input'), 'Section 1');
    await userEvent.type(
      await screen.findByTestId('description-input'),
      'section description'
    );
    await userEvent.click(await screen.findByTestId('create-button'));

    // After navigating
    const component = within(screen.getByTestId('navigated'));
    expect(component.getByText('/')).toBeInTheDocument();
  });
});
