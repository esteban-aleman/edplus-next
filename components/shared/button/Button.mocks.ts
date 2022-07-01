import { BUTTON_TYPES, DEFAULT } from 'lib/utils/constants';
import { ButtonProps } from './ButtonProps';

const primary: ButtonProps = {
  type: BUTTON_TYPES.primary,
  text: DEFAULT.string,
};

const secondary: ButtonProps = {
  type: BUTTON_TYPES.secondary,
  text: DEFAULT.string,
};

export const mockButtonProps = {
  primary,
  secondary,
};
