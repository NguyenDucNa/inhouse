import { MockedResponse } from '@apollo/client/testing';
import { TestRoot } from '@client/module/utils/test-root';
import { UPDATE_MENU_SECTION } from '@client/page/management/menu/menu-section-edit/logic/use-update-menu-section.ts';
import { render, screen, within, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, afterEach } from 'vitest';
import { MENU_SECTION_QUERY } from '@client/page/management/menu/menu-section-edit/logic/use-get-menu-section.ts';
import { MockBaseResponse } from '@client/module/utils/mock-response';
import MenuSectionEdit from './menu-section-edit';

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
      query: UPDATE_MENU_SECTION,
      variables: {
        id: 'abc-def-123',
        input: {
          name: 'Other 22',
          description: 'additions and etc.hello',
        },
      },
    },
    result: {
      data: {
        updateMenuSection: {
          name: 'Other 22',
          description: 'additions and etc.hello',
        },
      },
    },
  },
];

describe('Menu Section Edit Page', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should be able to render the menu section page', async () => {
    render(
      <TestRoot
        mocks={mocks}
        path=":menuSectionId"
        initialEntries="/abc-def-123"
      >
        <MenuSectionEdit />
      </TestRoot>
    );

    expect(await screen.findByTestId('save-button')).toBeInTheDocument();
    expect(await screen.findByTestId('title-input')).toBeInTheDocument();
    expect(await screen.findByTestId('description-input')).toBeInTheDocument();

    expect(screen.getByDisplayValue('Other 2')).toBeInTheDocument();
    expect(screen.getByDisplayValue('additions and etc.')).toBeInTheDocument();
  });

  it('Should be able to edit a menu section', async () => {
    render(
      <TestRoot
        mocks={mocks}
        path=":menuSectionId"
        initialEntries="/abc-def-123"
      >
        <MenuSectionEdit />
      </TestRoot>
    );

    await userEvent.type(await screen.findByTestId('title-input'), '2');
    await userEvent.type(
      await screen.findByTestId('description-input'),
      'hello'
    );
    await userEvent.click(await screen.findByTestId('save-button'));

    // After navigating
    const component = within(screen.getByTestId('navigated'));
    expect(component.getByText('/')).toBeInTheDocument();
  });
});
