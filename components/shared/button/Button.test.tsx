import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DEFAULT } from 'lib/utils/constants';
import Button from './Button';
import { mockButtonProps } from './Button.mocks';

describe('Button', () => {
  it('should render a Button with text', () => {
    render(<Button {...mockButtonProps.primary} />);

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent(DEFAULT.string);
  });

  it('should trigger the callback on click', async () => {
    let clicked = false;
    render(
      <Button
        {...mockButtonProps.primary}
        callback={() => {
          clicked = true;
        }}
      />
    );

    const btn = screen.getByRole('button');
    await userEvent.click(btn);
    expect(clicked).toBeTruthy();
  });
});
