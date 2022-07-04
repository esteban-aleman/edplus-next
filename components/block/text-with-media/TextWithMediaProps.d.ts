import { StaticImageData } from 'next/image';

export type TextWithMediaProps = {
  image: StaticImageData | string;
  title: string;
  text?: string;
  children?: React.ReactNode;
};
