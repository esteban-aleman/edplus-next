import { StaticImageData } from 'next/image';

export type HeroProps = {
  eyebrow: string;
  title: string;
  ctaText: string;
  ctaCallback: () => void;
  backgroundImage: StaticImageData | string;
};
