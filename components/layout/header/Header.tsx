import classnames from 'classnames';
import { Link } from 'components/shared';
import { DETAILS_PATH, DETAILS_SECTIONS, LOCALES } from 'lib/utils/constants';
import useScrollDirection from 'lib/utils/hooks/useScrollDirection';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from 'public/media/images/logo.png';
import { useMemo } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './HeaderProps';

const Header = (props: HeaderProps) => {
  const { locale } = props;
  const scrollUp = useScrollDirection();
  const router = useRouter();
  const { t } = useTranslation(locale);

  const alternateLanguageRoute = useMemo(() => {
    const alternateLanguage = locale === LOCALES.ES ? LOCALES.EN : LOCALES.ES;
    return router.asPath.indexOf(locale) !== -1
      ? router.asPath.replace(locale, alternateLanguage)
      : `/${alternateLanguage}`;
  }, [locale, router.asPath]);

  return (
    <header className={classnames(styles.root, { [styles.hidden]: !scrollUp })}>
      <nav className={styles.container}>
        <Link href={`/${locale}`}>
          <div className={styles.logo}>
            <Image src={Logo} alt={t('alt-logo')} />
          </div>
        </Link>
        <ul className={styles.menuLinks}>
          <li>
            <Link
              href={`/${locale}${DETAILS_PATH}` + DETAILS_SECTIONS.contact}
              text={t('contact-us')}
              className={styles.link}
            />
          </li>
          <li>
            <Link
              href={`/${locale}${DETAILS_PATH}` + DETAILS_SECTIONS.donate}
              text={t('donate-title')}
              className={styles.link}
            />
          </li>
          <li>
            <Link
              href={alternateLanguageRoute}
              text={t('alternative-language')}
              className={styles.link}
              scroll={false}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
