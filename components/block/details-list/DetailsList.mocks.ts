import { DEFAULT } from 'lib/utils/constants';
import { DetailsListProps } from './DetailsListProps';

const base: DetailsListProps = {
  details: [
    { title: DEFAULT.string + 1, text: DEFAULT.longString },
    { title: DEFAULT.string + 2, text: DEFAULT.longString },
    { title: DEFAULT.string + 3, text: DEFAULT.longString },
  ],
  locale: DEFAULT.locale,
};

export const mockDetailsListProps = {
  base,
};
