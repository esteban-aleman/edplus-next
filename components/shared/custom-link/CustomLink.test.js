import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CustomLink from './CustomLink';
import { mockCustomLinkProps } from './CustomLink.mocks';

describe('CustomLink rendering', () => {
  it('renders a CustomLink', () => {
    render(<CustomLink {...mockCustomLinkProps.base} />);

    const link = screen.getByText(mockCustomLinkProps.base.text);

    expect(link).toBeInTheDocument();
  });

  it('renders a CustomLink with children', () => {
    render(<CustomLink {...mockCustomLinkProps.withChildren} />);

    const linkChildren = screen.getByText(
      mockCustomLinkProps.withChildren.children.props.children
    );

    expect(linkChildren).toBeInTheDocument();
  });
});
