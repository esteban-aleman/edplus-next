import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Text from './Text';
import { mockTextProps } from './Text.mocks';

describe('Text', () => {
  it('should render a Text', () => {
    render(<Text {...mockTextProps.base} />);

    const base = screen.getByText(mockTextProps.base.text);
    expect(base).toBeInTheDocument();
  });
});
