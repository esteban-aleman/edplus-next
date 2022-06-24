import { TARGET_BLANK } from 'lib/utils/constants';
import Link from 'next/link';
import { CustomLinkProps } from './CustomLinkProps';

const CustomLink = (props: CustomLinkProps) => {
  const { text, target, href, className, locale, children } = props;
  return target === TARGET_BLANK ? (
    <a href={href} target={target} className={className}>
      {text}
      {children}
    </a>
  ) : (
    <Link href={href} locale={locale}>
      <a className={className}>
        {text}
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
