export type CustomLinkProps = {
  text?: string;
  target?: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
  cta?: CTA_TYPES;
  scroll?: boolean;
};
