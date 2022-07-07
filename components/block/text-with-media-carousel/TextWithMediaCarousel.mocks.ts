import { DEFAULT } from 'lib/utils/constants';
import { TextWithMediaCarouselProps } from './TextWithMediaCarouselProps';

const base: TextWithMediaCarouselProps = {
  id: DEFAULT.id,
  title: DEFAULT.string,
  description: DEFAULT.longString,
  carouselItems: [
    {
      image: DEFAULT.image,
      title: DEFAULT.string,
      description: DEFAULT.longString,
    },
    {
      image: DEFAULT.image,
      title: DEFAULT.string,
      description: DEFAULT.longString,
    },
    {
      image: DEFAULT.image,
      title: DEFAULT.string,
      description: DEFAULT.longString,
    },
  ],
};

export const mockTextWithMediaCarouselProps = {
  base,
};
