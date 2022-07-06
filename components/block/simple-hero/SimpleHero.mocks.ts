import { DEFAULT, SIMPLE_HERO_TYPES } from 'lib/utils/constants';
import { SimpleHeroProps } from './SimpleHeroProps';

const base: SimpleHeroProps = {
  id: DEFAULT.id,
  title: DEFAULT.string,
  text: DEFAULT.string,
  type: SIMPLE_HERO_TYPES.primary,
};

const light: SimpleHeroProps = {
  id: DEFAULT.id,
  title: DEFAULT.string,
  text: DEFAULT.string,
  type: SIMPLE_HERO_TYPES.light,
};

const withChildren: SimpleHeroProps = {
  id: DEFAULT.id,
  title: DEFAULT.string,
  text: DEFAULT.string,
  type: SIMPLE_HERO_TYPES.primary,
  children: DEFAULT.children,
};

export const mockSimpleHeroProps = {
  base,
  light,
  withChildren,
};
