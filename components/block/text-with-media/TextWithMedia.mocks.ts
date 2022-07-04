import { DEFAULT } from 'lib/utils/constants';
import Team from 'public/media/images/team1.jpg';
import { TextWithMediaProps } from './TextWithMediaProps';

const base: TextWithMediaProps = {
  image: Team,
  title: DEFAULT.string,
  text: DEFAULT.string,
};

const withChildren: TextWithMediaProps = {
  image: Team,
  title: DEFAULT.string,
  text: DEFAULT.string,
  children: DEFAULT.children,
};

export const mockTextWithMediaProps = {
  base,
  withChildren,
};
