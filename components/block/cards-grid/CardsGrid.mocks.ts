import { DEFAULT } from 'lib/utils/constants';
import { CardsGridProps } from './CardsGridProps';

const base: CardsGridProps = {
  cards: [
    {
      image: DEFAULT.image,
      title: DEFAULT.string + 1,
      description: DEFAULT.longString,
      linkText: DEFAULT.string,
      linkUrl: DEFAULT.linkUrl,
    },
    {
      image: DEFAULT.image,
      title: DEFAULT.string + 2,
      description: DEFAULT.longString,
      linkText: DEFAULT.string,
      linkUrl: DEFAULT.linkUrl,
    },
    {
      image: DEFAULT.image,
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
