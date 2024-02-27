import { expect, describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardFooter from '@packages/ui/card/card-footer.tsx';

describe('Card footer', () => {
  it('Should render the card footer', () => {
    render(
      <CardFooter>
        <p>Content 1</p>
        <p>Content 2</p>
      </CardFooter>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });
});
