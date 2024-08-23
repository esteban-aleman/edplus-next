import { TITLE_TYPES } from 'lib/utils/constants';
import { ImageProps, StaticImageData } from 'next/image';

export type TextWithMediaProps = {
  image: StaticImageData | string;
  imageAlt: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
  titleLevel?: TITLE_TYPES;
  imagePriority?: boolean;
  imageBehaviour?: ImageProps['objectFit'];
};
