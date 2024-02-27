import { MockedResponse } from '@apollo/client/testing';
import { TestRoot } from '@client/module/utils/test-root';
import { render, screen, within, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, afterEach } from 'vitest';
import { MENU_SECTION_QUERY } from '@client/page/management/menu/menu-section-edit/logic/use-get-menu-section.ts';
import { MockBaseResponse } from '@client/module/utils/mock-response.ts';
import { DELETE_MENU } from './logic/use-delete-menu';
import MenuDetailDeleteButton from './component/menu-detail-delete-button';

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
        menu: {
          id: 'abc-def-123',
          name: 'Night Menu',
          description: 'popular night menu and etc.',
        },
      },
    },
  },
  {
    request: {
      query: DELETE_MENU,
      variables: {
        id: 'abc-def-123',
      },
    },
    result: {
      data: {
        id: 'abc-def-123',
      },
    },
  },
];

describe('Menu Section Delete Page', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should be able to render the menu delete page', async () => {
    render(
      <TestRoot mocks={mocks}>
        <MenuDetailDeleteButton menuId={':menuId'} />
      </TestRoot>
    );

    expect(await screen.findByTestId('delete-button')).toBeInTheDocument();
  });

  it('Should be able to delete a menu', async () => {
    render(
      <TestRoot mocks={mocks}>
        <MenuDetailDeleteButton menuId={'abc-def-123'} />
      </TestRoot>
    );
    await userEvent.click(await screen.findByTestId('delete-button'));
    await userEvent.click(await screen.findByTestId('delete-confirm'));

    // After navigating
    const component = within(screen.getByTestId('navigated'));
    expect(component.getByText('/')).toBeInTheDocument();
  });
});
