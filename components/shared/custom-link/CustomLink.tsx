import classnames from 'classnames';
import { CTA_TYPES, TARGET_BLANK } from 'lib/utils/constants';
import Link from 'next/link';
import { HTMLAttributes, useCallback } from 'react';
import styles from './CustomLink.module.scss';
import { CustomLinkProps } from './CustomLinkProps';

const CustomLink = (props: CustomLinkProps & HTMLAttributes<HTMLElement>) => {
  const { text, target, href, className, children, cta, scroll, ...rest } =
    props;
  const classes = classnames(className, {
    [styles.root]: !cta,
    [styles.cta]: cta,
    [styles.ctaPrimary]: cta === CTA_TYPES.primary,
    [styles.ctaSecondary]: cta === CTA_TYPES.secondary,
    [styles.ctaPaypal]: cta === CTA_TYPES.paypal,
  });

  const focusOnScroll = useCallback(() => {
    if (cta) {
      const targetElement = document.querySelector(href) as HTMLElement | null;

      if (targetElement) {
        targetElement.focus();
      }
    }
  }, [cta, href]);

  return target === TARGET_BLANK ? (
    <a href={href} target={target} className={classes} {...rest}>
      {text}
      {children}
    </a>
  ) : (
    <Link href={href} scroll={scroll}>
      <a className={classes} onClick={focusOnScroll} {...rest}>
        {text}
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
