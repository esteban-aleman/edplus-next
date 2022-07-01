import { DEFAULT } from 'lib/utils/constants';
import HeroBackground from 'public/media/images/hero1.jpg';
import { HeroProps } from './HeroProps';

const base: HeroProps = {
  eyebrow: DEFAULT.string,
  title: DEFAULT.string,
  ctaText: DEFAULT.string,
  ctaCallback: () => {
    console.log('callback');
  },
  backgroundImage: HeroBackground,
};

export const mockHeroProps = {
  base,
};
