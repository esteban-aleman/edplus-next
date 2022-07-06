import { DEFAULT } from 'lib/utils/constants';
import { TimelineProps } from './TimelineProps';

const base: TimelineProps = {
  entries: [
    {
      date: DEFAULT.year,
      title: DEFAULT.string,
      description: DEFAULT.longString,
    },
    {
      date: DEFAULT.year,
      title: DEFAULT.string,
      description: DEFAULT.longString,
    },
    {
      date: DEFAULT.year,
      title: DEFAULT.string,
      description: DEFAULT.longString,
    },
    {
      date: DEFAULT.year,
      title: DEFAULT.string,
      description: DEFAULT.longString,
    },
    {
      date: DEFAULT.year,
      title: DEFAULT.string,
      description: DEFAULT.longString,
    },
  ],
  title: DEFAULT.string,
};

export const mockTimelineProps = {
  base,
};
