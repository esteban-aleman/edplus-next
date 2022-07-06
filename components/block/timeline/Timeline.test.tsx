import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';
import { mockTimelineProps } from './Timeline.mocks';

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
}));

describe('Timeline', () => {
  it('should render a Timeline', () => {
    render(<Timeline {...mockTimelineProps.base} />);

    const entries = screen.getAllByRole('heading', { level: 3 });
    expect(entries.length).toBe(mockTimelineProps.base.entries.length);
  });
});
