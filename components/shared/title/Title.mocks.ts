import { DEFAULT, TITLE_TYPES } from 'lib/utils/constants';
import { TitleProps } from './TitleProps';

const h1: TitleProps = {
  title: DEFAULT.string,
  type: TITLE_TYPES.h1,
  level: TITLE_TYPES.h1,
};

export const mockTitleProps = {
  h1,
};
