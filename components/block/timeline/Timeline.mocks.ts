import { DEFAULT } from 'lib/utils/constants';
import { TimelineProps } from './TimelineProps';

const base: TimelineProps = {
  entries: [
    {
      date: DEFAULT.string,
      title: DEFAULT.string,
      description: DEFAULT.string,
    },
    {
      date: DEFAULT.string,
      title: DEFAULT.string,
      description: DEFAULT.string,
    },
    {
      date: DEFAULT.string,
      title: DEFAULT.string,
      description: DEFAULT.string,
    },
    {
      date: DEFAULT.string,
      title: DEFAULT.string,
      description: DEFAULT.string,
    },
    {
      date: DEFAULT.string,
      title: DEFAULT.string,
      description: DEFAULT.string,
    },
  ],
  title: DEFAULT.string,
};

export const mockTimelineProps = {
  base,
};
