import cx from 'classnames';
import { TARGET_BLANK } from 'lib/utils/constants';
import Link from 'next/link';
import styles from './CustomLink.module.scss';
import { CustomLinkProps } from './CustomLinkProps';

const CustomLink = (props: CustomLinkProps) => {
  const { text, target, href, className, locale, children } = props;
  return target === TARGET_BLANK ? (
    <a href={href} target={target} className={cx(styles.root, className)}>
      {text}
      {children}
    </a>
  ) : (
    <Link href={href} locale={locale}>
      <a className={cx(styles.root, className)}>
        {text}
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
