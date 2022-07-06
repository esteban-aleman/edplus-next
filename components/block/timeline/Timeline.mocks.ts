import { DEFAULT } from 'lib/utils/constants';
import { TimelineProps } from './TimelineProps';

const base: TimelineProps = {
  entries: [
    {
      date: DEFAULT.year,
      title: DEFAULT.string + 1,
      description: DEFAULT.longString,
    },
    {
      date: DEFAULT.year,
      title: DEFAULT.string + 2,
      description: DEFAULT.longString,
    },
    {
      date: DEFAULT.year,
      title: DEFAULT.string + 3,
      description: DEFAULT.longString,
    },
    {
      date: DEFAULT.year,
      title: DEFAULT.string + 4,
      description: DEFAULT.longString,
    },
    {
      date: DEFAULT.year,
      title: DEFAULT.string + 5,
      description: DEFAULT.longString,
    },
  ],
  title: DEFAULT.string,
};

export const mockTimelineProps = {
  base,
};
