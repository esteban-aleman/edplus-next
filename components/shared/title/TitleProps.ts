import { TITLE_TYPES } from 'lib/utils/constants';

export type TitleProps = {
  title: string;
  type: TITLE_TYPES;
  level: keyof JSX.IntrinsicElements;
  className?: string;
};
