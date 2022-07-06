import { DEFAULT } from 'lib/utils/constants';
import DefaultImage from 'public/media/tests/default-image-768x576.jpeg';
import { TextWithMediaProps } from './TextWithMediaProps';

const base: TextWithMediaProps = {
  image: DefaultImage,
  title: DEFAULT.string,
  text: DEFAULT.longString,
};

const withChildren: TextWithMediaProps = {
  image: DefaultImage,
  title: DEFAULT.string,
  text: DEFAULT.longString,
  children: DEFAULT.children,
};

export const mockTextWithMediaProps = {
  base,
  withChildren,
};
