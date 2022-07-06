import { SIMPLE_HERO_TYPES } from 'lib/utils/constants';

export type SimpleHeroProps = {
  id?: string;
  title: string;
  text: string;
  type: SIMPLE_HERO_TYPES;
  children?: React.ReactNode;
};
