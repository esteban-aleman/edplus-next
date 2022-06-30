import { Link } from 'components/shared';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import Image from 'next/image';
import Logo from 'public/media/images/logo_light.png';
import { useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './FooterProps';
import FooterColumn from './partials/FooterColumn';
import { FooterColumnProps } from './partials/FooterColumnProps';

const Footer = (props: FooterProps) => {
  const { columns } = props;
  const { t } = useTranslation();
  const [mappedColumns, setMappedColumns] = useState<Array<FooterColumnProps>>(
    []
  );

  // Translate texts
  useEffect(() => {
    const mapColumns = (
      entries: Array<FooterColumnProps>
    ): Array<FooterColumnProps> =>
      entries.map((c) => {
        return {
          title: t(c.title),
          links: c.links.map((l) => {
            return {
              ...l,
              text: t(l.text),
            };
          }),
        };
      });
    setMappedColumns(mapColumns(columns));
  }, [columns, t]);

  return (
    <footer className={styles.root}>
      <div className={styles.top}>
        <div className={styles.contact}>
          <div className={styles.logo}>
            <Image
              src={Logo}
              alt={t('alt-logo')}
              width={54}
              height={48}
              aria-hidden={true}
            />
          </div>
          <p className={styles.contactBlock} tabIndex={0}>
            {t('address')}
          </p>
          <p className={styles.contactBlock} tabIndex={0}>
            {'edplus@edplus.or.cr'}
          </p>
          <p className={styles.contactBlock} tabIndex={0}>
            {'+506 2227 8642'}
          </p>
        </div>
        <div className={styles.columns}>
          {mappedColumns.map((c) => (
            <FooterColumn key={c.title} title={c.title} links={c.links} />
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.legal}>
          <Link
            href="#"
            target={'_blank'}
            className={styles.legalLink}
            text={t('legal-document-one')}
          />
          <span className={styles.separator}></span>
          <Link
            href="#"
            target={'_blank'}
            className={styles.legalLink}
            text={t('legal-document-two')}
          />
          <span className={styles.separator}></span>
          <Link
            href="#"
            target={'_blank'}
            className={styles.legalLink}
            text={t('legal-document-three')}
          />
        </div>
        <p className={styles.copyright} tabIndex={0}>
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
