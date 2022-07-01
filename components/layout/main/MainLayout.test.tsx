import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { DEFAULT } from 'lib/utils/constants';
import MainLayout from './MainLayout';
import { mockMainLayoutProps } from './MainLayout.mocks';

describe('MainLayout', () => {
  it('should render a MainLayout', () => {
    render(<MainLayout {...mockMainLayoutProps.base} />);

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('should render a MainLayout with children', () => {
    render(<MainLayout {...mockMainLayoutProps.base} />);

    const main = screen.getByRole('main');
    const children = within(main).getByText(DEFAULT.childrenText);
    expect(children).not.toBeNull();
  });
});
