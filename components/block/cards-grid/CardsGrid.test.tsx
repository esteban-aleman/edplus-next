import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardsGrid from './CardsGrid';
import { mockCardsGridProps } from './CardsGrid.mocks';

describe('CardsGrid', () => {
  it('should render a CardsGrid', () => {
    render(<CardsGrid {...mockCardsGridProps.base} />);

    const cards = screen.getAllByRole('heading', { level: 2 });
    expect(cards.length).toBe(mockCardsGridProps.base.cards.length);
  });
});
