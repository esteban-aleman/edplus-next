import { DEFAULT } from 'lib/utils/constants';
import { CustomLinkProps } from './CustomLinkProps';

const base: CustomLinkProps = {
  text: DEFAULT.string,
  href: DEFAULT.linkUrl,
  className: DEFAULT.className,
};

const external: CustomLinkProps = {
  text: DEFAULT.string,
  href: DEFAULT.externalLinkUrl,
  className: DEFAULT.className,
  target: '_blank',
};

const withChildren: CustomLinkProps = {
  href: DEFAULT.linkUrl,
  className: DEFAULT.className,
  children: DEFAULT.children,
};

export const mockCustomLinkProps = {
  base,
  external,
  withChildren,
};
