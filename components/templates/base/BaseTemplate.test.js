import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BaseTemplate from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

describe('BaseTemplate rendering', () => {
  it('renders a BaseTemplate', () => {
    render(<BaseTemplate {...mockBaseTemplateProps.base} />);

    const base = screen.getByText(mockBaseTemplateProps.base.sampleTextProp);

    expect(base).toBeInTheDocument();
  });
});
