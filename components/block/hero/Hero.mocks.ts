import { DEFAULT } from 'lib/utils/constants';
import { HeroProps } from './HeroProps';

const base: HeroProps = {
  eyebrow: DEFAULT.string,
  title: DEFAULT.string,
  ctaText: DEFAULT.string,
  backgroundImage: DEFAULT.image,
  ctaReferenceId: DEFAULT.string,
};

export const mockHeroProps = {
  base,
};
