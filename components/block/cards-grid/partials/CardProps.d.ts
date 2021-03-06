import { StaticImageData } from 'next/image';

export type CardProps = {
  image: StaticImageData | string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
};
