import classnames from 'classnames';
import { LOCALES } from 'lib/utils/constants';
import useScrollDirection from 'lib/utils/hooks/useScrollDirection';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from 'public/media/images/logo.png';
import styles from './Header.module.scss';

const Header = () => {
  const scrollUp = useScrollDirection();
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <header className={classnames(styles.root, { [styles.hidden]: !scrollUp })}>
      <div className={styles.container}>
        <Link href={'/'}>
          <a>
            <Image
              src={Logo}
              alt="Educacion Plus Logo"
              width={54}
              height={48}
            />
            <div aria-hidden={true} className={styles.logo}></div>
          </a>
        </Link>
        <Link
          href={'/'}
          locale={router?.locale === LOCALES.ES ? LOCALES.EN : LOCALES.ES}
        >
          <a className={styles.link}>{t ? t('alternative-language') : ''}</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
