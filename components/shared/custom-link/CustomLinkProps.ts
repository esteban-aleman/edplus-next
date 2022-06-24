import React from 'react';

export type CustomLinkProps = {
  text?: string;
  target?: string;
  href: string;
  className?: string;
  locale?: string;
  children?: React.ReactNode;
};
