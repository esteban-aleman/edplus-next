import { DEFAULT } from 'lib/utils/constants';
import { TextWithMediaProps } from './TextWithMediaProps';

const base: TextWithMediaProps = {
  image: DEFAULT.image,
  imageAlt: DEFAULT.string,
  title: DEFAULT.string,
  text: DEFAULT.longString,
};

const withChildren: TextWithMediaProps = {
  image: DEFAULT.image,
  imageAlt: DEFAULT.string,
  title: DEFAULT.string,
  text: DEFAULT.longString,
  children: DEFAULT.children,
};

export const mockTextWithMediaProps = {
  base,
  withChildren,
};
