import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DEFAULT } from 'lib/utils/constants';
import TextWithMedia from './TextWithMedia';
import { mockTextWithMediaProps } from './TextWithMedia.mocks';

describe('TextWithMedia', () => {
  it('should render a TextWithMedia', () => {
    render(<TextWithMedia {...mockTextWithMediaProps.base} />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(mockTextWithMediaProps.base.title);
  });
  it('should render a TextWithMedia with children', () => {
    render(<TextWithMedia {...mockTextWithMediaProps.withChildren} />);

    const children = screen.getByText(DEFAULT.childrenText);
    expect(children).toBeInTheDocument();
  });
});
