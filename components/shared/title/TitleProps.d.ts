import { TITLE_TYPES } from 'lib/utils/constants';

export type TitleProps = {
  title: string;
  type: TITLE_TYPES;
  level: TITLE_TYPES;
  className?: string;
};
