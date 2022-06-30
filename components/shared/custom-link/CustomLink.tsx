import cx from 'classnames';
import { TARGET_BLANK } from 'lib/utils/constants';
import Link from 'next/link';
import { LinkHTMLAttributes } from 'react';
import styles from './CustomLink.module.scss';
import { CustomLinkProps } from './CustomLinkProps';

const CustomLink = (
  props: CustomLinkProps & LinkHTMLAttributes<HTMLElement>
) => {
  const { text, target, href, className, locale, children, ...rest } = props;
  return target === TARGET_BLANK ? (
    <a
      href={href}
      target={target}
      className={cx(styles.root, className)}
      {...rest}
    >
      {text}
      {children}
    </a>
  ) : (
    <Link href={href} locale={locale}>
      <a className={cx(styles.root, className)} {...rest}>
        {text}
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
