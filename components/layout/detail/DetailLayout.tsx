import { Link } from 'components/shared';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import styles from './DetailLayout.module.scss';
import { DetailLayoutProps } from './DetailLayoutProps';

const DetailLayout = (props: DetailLayoutProps) => {
  const { children, locale } = props;

  const { t } = useTranslation(locale);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Link href={`/${locale}`} className={styles.link}>
          {t('go-back')}
        </Link>
      </div>
      {children}
    </div>
  );
};

export default DetailLayout;
