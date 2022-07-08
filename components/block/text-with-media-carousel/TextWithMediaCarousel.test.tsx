import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TextWithMediaCarousel from './TextWithMediaCarousel';
import { mockTextWithMediaCarouselProps } from './TextWithMediaCarousel.mocks';

describe('TextWithMediaCarousel', () => {
  it('should render a TextWithMediaCarousel', () => {
    render(<TextWithMediaCarousel {...mockTextWithMediaCarouselProps.base} />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent(mockTextWithMediaCarouselProps.base.title);

    //For a11y just one card at a time
    const cardsTitles = screen.getAllByRole('heading', { level: 3 });
    expect(cardsTitles.length).toBe(1);
  });
});
