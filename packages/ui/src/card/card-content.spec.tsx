import { expect, describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardContent from '@packages/ui/card/card-content.tsx';

describe('Card content', () => {
  it('Should render the card footer', () => {
    render(
      <CardContent>
        <p>Content 1</p>
        <p>Content 2</p>
      </CardContent>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });
});
