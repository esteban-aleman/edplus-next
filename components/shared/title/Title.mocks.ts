import { DEFAULT, TITLE_TYPES } from 'lib/utils/constants';
import { TitleProps } from './TitleProps';

const h1: TitleProps = {
  title: DEFAULT.string,
  type: TITLE_TYPES.h1,
  level: TITLE_TYPES.h1,
};

const h3: TitleProps = {
  title: DEFAULT.string,
  type: TITLE_TYPES.h3,
  level: TITLE_TYPES.h3,
};

const h4: TitleProps = {
  title: DEFAULT.string,
  type: TITLE_TYPES.h4,
  level: TITLE_TYPES.h4,
};

const h5: TitleProps = {
  title: DEFAULT.string,
  type: TITLE_TYPES.h5,
  level: TITLE_TYPES.h5,
};

export const mockTitleProps = {
  h1,
  h3,
  h4,
  h5,
};
