import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { mockHomeProps } from './Home.mocks';

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
}));

describe('Home', () => {
  it('should render a Home', () => {
    render(<Home {...mockHomeProps.base} />);

    const base = screen.getByRole('heading', { level: 1 });
    expect(base).toBeInTheDocument();
  });
});
