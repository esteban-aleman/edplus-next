import { Link } from 'components/shared';
import { TARGET_BLANK } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import Image from 'next/image';
import Logo from 'public/media/images/logo_light.png';
import { useMemo } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './FooterProps';
import FooterColumn from './partials/FooterColumn';

const Footer = (props: FooterProps) => {
  const { columns, locale } = props;
  const { t } = useTranslation(locale);

  const mappedColumns = useMemo(
    () =>
      columns.map((c) => {
        return {
          title: t(c.title),
          links: c.links.map((l) => {
            return {
              ...l,
              text: t(l.text),
              href: l.target === TARGET_BLANK ? l.href : `/${locale}${l.href}`,
            };
          }),
        };
      }),
    [t, columns, locale]
  );

  return (
    <footer className={styles.root}>
      <div className={styles.top}>
        <div className={styles.contact}>
          <div className={styles.logo}>
            <Image
              src={Logo}
              alt={''}
              aria-hidden={true}
              role="presentation"
              width={54}
              height={48}
            />
          </div>
          <p className={styles.contactBlock}>{t('address')}</p>
          <p className={styles.contactBlock}>{'edplus@edplus.or.cr'}</p>
          <p className={styles.contactBlock}>{'+506 2227 8642'}</p>
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
            href="/docs/dataProtection.pdf"
            target={'_blank'}
            className={styles.legalLink}
            text={t('legal-document-one')}
          />
          <span className={styles.separator}></span>
          <Link
            href="/docs/dataPrivacy.pdf"
            target={'_blank'}
            className={styles.legalLink}
            text={t('legal-document-two')}
          />
          <span className={styles.separator}></span>
          <Link
            href="/docs/Resumen-Ejecutivo-Educacion-Plus.pdf"
            target={'_blank'}
            className={styles.legalLink}
            text={t('legal-document-three')}
          />
        </div>
        <p className={styles.copyright}>{t('copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
