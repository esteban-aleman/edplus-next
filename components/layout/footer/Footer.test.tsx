import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { mockFooterProps } from './Footer.mocks';

describe('Footer', () => {
  it('should render a Footer', () => {
    render(<Footer {...mockFooterProps} />);

    const base = screen.getByRole('contentinfo');
    expect(base).toBeInTheDocument();
  });

  it('should render all the columns in the Footer', () => {
    render(<Footer {...mockFooterProps} />);

    const columns = screen.getAllByRole('list');
    expect(columns.length).toBe(mockFooterProps.columns.length);
  });
});
