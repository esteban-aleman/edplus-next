import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { DEFAULT } from 'lib/utils/constants';
import CustomLink from './CustomLink';
import { mockCustomLinkProps } from './CustomLink.mocks';

describe('CustomLink', () => {
  it('should render a CustomLink', () => {
    render(<CustomLink {...mockCustomLinkProps.base} />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('should render a CustomLink with children', () => {
    render(<CustomLink {...mockCustomLinkProps.withChildren} />);

    const link = screen.getByRole('link');
    const children = within(link).getByText(DEFAULT.childrenText);
    expect(children).not.toBeNull();
  });
});
