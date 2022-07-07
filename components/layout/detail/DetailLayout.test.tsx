import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DEFAULT } from 'lib/utils/constants';
import DetailLayout from './DetailLayout';
import { mockDetailLayoutProps } from './DetailLayout.mocks';

describe('DetailLayout', () => {
  it('should render a DetailLayout with children', () => {
    render(<DetailLayout {...mockDetailLayoutProps.base} />);

    const children = screen.getByText(DEFAULT.childrenText);
    expect(children).not.toBeNull();
  });
});
