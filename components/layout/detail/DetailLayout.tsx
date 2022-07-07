import { Link } from 'components/shared';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import styles from './DetailLayout.module.scss';
import { DetailLayoutProps } from './DetailLayoutProps';

const DetailLayout = (props: DetailLayoutProps) => {
  const { children } = props;

  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Link href={'/'} className={styles.link}>
          {t('go-back')}
        </Link>
      </div>
      {children}
    </div>
  );
};

export default DetailLayout;
