import { expect, describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AlertError from '@packages/ui/alert/alert-error.tsx';

describe('AlertError render', () => {
  it('Should render alert error', () => {
    render(<AlertError title={'Title label'} message={'Message label'} />);

    expect(screen.getByText('Title label')).toBeInTheDocument();
    expect(screen.getByText('Message label')).toBeInTheDocument();
  });
});
