import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { mockHeroProps } from './Hero.mocks';

describe('Hero', () => {
  it('should render a Hero with H1 heading', () => {
    render(<Hero {...mockHeroProps.base} />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
