import { DEFAULT } from 'lib/utils/constants';
import DefaultImage from 'public/media/tests/default-image-768x576.jpeg';
import { CardsGridProps } from './CardsGridProps';

const base: CardsGridProps = {
  cards: [
    {
      image: DefaultImage,
      title: DEFAULT.string + 1,
      description: DEFAULT.longString,
      linkText: DEFAULT.string,
      linkUrl: DEFAULT.linkUrl,
    },
    {
      image: DefaultImage,
      title: DEFAULT.string + 2,
      description: DEFAULT.longString,
      linkText: DEFAULT.string,
      linkUrl: DEFAULT.linkUrl,
    },
    {
      image: DefaultImage,
      title: DEFAULT.string + 3,
      description: DEFAULT.longString,
      linkText: DEFAULT.string,
      linkUrl: DEFAULT.linkUrl,
    },
  ],
};

export const mockCardsGridProps = {
  base,
};
