import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import MainLayout from './MainLayout';
import { mockMainLayoutProps } from './MainLayout.mocks';

describe('MainLayout rendering', () => {
  it('renders a MainLayout', () => {
    render(<MainLayout {...mockMainLayoutProps.base} />);

    const mainChildren = screen.getByText(
      (mockMainLayoutProps.base.children as ReactElement).props.children
    );
    expect(mainChildren).toBeInTheDocument();
  });
});
