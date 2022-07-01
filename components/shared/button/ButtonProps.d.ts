import { BUTTON_TYPES } from 'lib/utils/constants';

export type ButtonProps = {
  type: BUTTON_TYPES;
  text: string;
  callback?: () => void;
  className?: string;
};
