import DefaultImage from 'public/media/tests/default-image-768x576.jpeg';

export enum TITLE_TYPES {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
}

export enum TEXT_TAGS {
  p = 'p',
  span = 'span',
  strong = 'strong',
  em = 'em',
  blockquote = 'blockquote',
  code = 'code',
  mark = 'mark',
  ins = 'ins',
  del = 'del',
  sup = 'sup',
  sub = 'sub',
  small = 'small',
  i = 'i',
  b = 'b',
}

export enum CTA_TYPES {
  primary = 'primary',
  secondary = 'secondary',
  paypal = 'paypal,',
}

export enum SIMPLE_HERO_TYPES {
  primary = 'primary',
  light = 'light',
}

export enum LOCALES {
  EN = 'en',
  ES = 'es',
}

export const DETAILS_PATH = '/details/';

export const TARGET_BLANK = '_blank';

export const PAYPAL_LINK =
  'https://www.paypal.com/donate/?hosted_button_id=5JHL5DLYAKTEC';

export const DETAILS_SECTIONS = {
  contact: 'contact',
  mission: 'mission',
  vision: 'vision',
  donate: 'donate',
  purpose: 'purpose',
};
export const DEFAULT = {
  string: 'DEFAULT_STRING',
  linkUrl: '#',
  externalLinkUrl: 'https://www.google.com',
  className: 'DEFAULT_CLASSNAME',
  locale: LOCALES.ES,
  children: <div>DEFAULT_CHILDREN</div>,
  childrenText: 'DEFAULT_CHILDREN',
  id: 'DEFAULT_ID',
  year: '1993',
  image: DefaultImage,
  longString:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
