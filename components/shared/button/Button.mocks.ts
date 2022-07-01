import { BUTTON_TYPES, DEFAULT } from 'lib/utils/constants';
import { ButtonProps } from './ButtonProps';

const primary: ButtonProps = {
  type: BUTTON_TYPES.primary,
  text: DEFAULT.string,
  callback: () => {
    console.log('Primary button click');
  },
};

const secondary: ButtonProps = {
  type: BUTTON_TYPES.secondary,
  text: DEFAULT.string,
  callback: () => {
    console.log('Secondary button click');
  },
};

export const mockButtonProps = {
  primary,
  secondary,
};
