import { DEFAULT } from 'lib/utils/constants';
import { HeroProps } from './HeroProps';

const base: HeroProps = {
  eyebrow: DEFAULT.string,
  title: DEFAULT.string,
  ctaText: DEFAULT.string,
  ctaCallback: () => {
    console.log('callback');
  },
  backgroundImage: DEFAULT.image,
};

export const mockHeroProps = {
  base,
};
