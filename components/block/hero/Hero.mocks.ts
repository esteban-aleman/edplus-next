import { DEFAULT } from 'lib/utils/constants';
import DefaultImage from 'public/media/tests/default-image-768x576.jpeg';
import { HeroProps } from './HeroProps';

const base: HeroProps = {
  eyebrow: DEFAULT.string,
  title: DEFAULT.string,
  ctaText: DEFAULT.string,
  ctaCallback: () => {
    console.log('callback');
  },
  backgroundImage: DefaultImage,
};

export const mockHeroProps = {
  base,
};
