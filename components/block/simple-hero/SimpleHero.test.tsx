import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DEFAULT } from 'lib/utils/constants';
import SimpleHero from './SimpleHero';
import { mockSimpleHeroProps } from './SimpleHero.mocks';

describe('SimpleHero', () => {
  it('should render a SimpleHero', () => {
    render(<SimpleHero {...mockSimpleHeroProps.base} />);

    const base = screen.getByRole('heading', { level: 2 });
    expect(base).toBeInTheDocument();
  });

  it('should render a SimpleHero with children', () => {
    render(<SimpleHero {...mockSimpleHeroProps.withChildren} />);

    const withChildren = screen.getByText(DEFAULT.childrenText);
    expect(withChildren).toBeInTheDocument();
  });
});
