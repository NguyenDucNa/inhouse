import { expect, describe, it } from 'vitest';
import '@testing-library/jest-dom';
import Card from '@packages/ui/card/card.tsx';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
  it('Should render the card component', () => {
    render(
      <Card>
        <p>Content 1</p>
        <p>Content 2</p>
      </Card>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });
});
