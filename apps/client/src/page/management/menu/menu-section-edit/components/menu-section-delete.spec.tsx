import { MockedResponse } from '@apollo/client/testing';
import { TestRoot } from '@client/module/utils/test-root';
import { render, screen, within, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, afterEach } from 'vitest';
import { MENU_SECTION_QUERY } from '@client/page/management/menu/menu-section-edit/logic/use-get-menu-section.ts';
import { MockBaseResponse } from '@client/module/utils/mock-response';
import { DELETE_MENU_SECTION } from '../logic/use-delete-menu-section';
import MenuSectionDelete from './menu-section-delete';

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
      query: DELETE_MENU_SECTION,
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

  it('Should be able to render the menu delete section page', async () => {
    render(
      <TestRoot mocks={mocks}>
        <MenuSectionDelete sectionId={':menuSectionId'} />
      </TestRoot>
    );

    expect(await screen.findByTestId('delete-button')).toBeInTheDocument();
  });

  it('Should be able to delete a menu section', async () => {
    render(
      <TestRoot mocks={mocks}>
        <MenuSectionDelete sectionId={'abc-def-123'} />
      </TestRoot>
    );
    await userEvent.click(await screen.findByTestId('delete-button'));
    await userEvent.click(await screen.findByTestId('delete-confirm'));

    // After navigating
    const component = within(screen.getByTestId('navigated'));
    expect(component.getByText('/')).toBeInTheDocument();
  });
});
