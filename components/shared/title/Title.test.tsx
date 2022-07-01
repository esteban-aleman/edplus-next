import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DEFAULT } from 'lib/utils/constants';
import Title from './Title';
import { mockTitleProps } from './Title.mocks';

describe('Title', () => {
  it('should render a Title with proper level and text', () => {
    render(<Title {...mockTitleProps.h1} />);

    const base = screen.getByRole('heading', { level: 1 });
    expect(base).toBeInTheDocument();
    expect(base).toHaveTextContent(DEFAULT.string);
  });
});
