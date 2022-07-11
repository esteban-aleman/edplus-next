import { LOCALES } from 'lib/utils/constants';

export type CustomLinkProps = {
  text?: string;
  target?: string;
  href: string;
  className?: string;
  locale?: LOCALES;
  children?: React.ReactNode;
  cta?: CTA_TYPES;
  scroll?: boolean;
};
