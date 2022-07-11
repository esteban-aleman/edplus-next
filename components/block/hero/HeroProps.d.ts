import { StaticImageData } from 'next/image';

export type HeroProps = {
  eyebrow: string;
  title: string;
  ctaText: string;
  backgroundImage: StaticImageData | string;
  ctaReferenceId: string;
};
