import { expect, describe, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import CardHeader from '@packages/ui/card/card-header.tsx';
import { useNavigate } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Card header', () => {
  it('Should render the card header', () => {
    const navigate = vi.fn();
    vi.mock('react-router-dom');
    vi.mocked(useNavigate).mockReturnValue(navigate);

    render(
      <CardHeader title="Some title">
        <p>Content 1</p>
        <p>Content 2</p>
      </CardHeader>
    );

    expect(screen.getByText('Some title')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('Should render the card header with functional back button', async () => {
    const navigate = vi.fn();
    vi.mock('react-router-dom');
    vi.mocked(useNavigate).mockReturnValue(navigate);

    render(
      <CardHeader title="Some title" withBackButton={true}>
        <p>Content 1</p>
        <p>Content 2</p>
      </CardHeader>
    );

    expect(screen.getByText('Some title')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.getByTestId('back-button')).toBeInTheDocument();

    await userEvent.click(await screen.findByTestId('back-button'));
    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('..');
    });
  });
});
