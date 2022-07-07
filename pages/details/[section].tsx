import { DetailsList, TextWithMedia } from 'components/block';
import { MainLayout } from 'components/layout';
import { Link } from 'components/shared';
import { Sections, sections } from 'lib/pages-data/details';
import { DETAILS_SECTIONS, TITLE_TYPES } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import { useRouter } from 'next/router';
import styles from 'styles/pages/details.module.scss';
import { NextPageWithLayout } from '../page';

const Details: NextPageWithLayout = () => {
  const router = useRouter();
  const { section } = router.query;
  const sectionParam = section?.toString();
  const { t } = useTranslation();

  const mapSections = (sections: Sections): Sections => {
    const keys = Object.keys(sections);
    const translatedSections: Sections = {};
    keys.forEach((k) => {
      translatedSections[k] = {
        ...sections[k],
        title: t(sections[k].title),
        description: t(sections[k].description || ''),
        details: sections[k].details?.map((d) => {
          return {
            title: t(d.title),
            text: t(d.text),
          };
        }),
      };
    });
    return translatedSections;
  };

  const translatedSections = mapSections(sections);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Link href={'/'} className={styles.link}>
          {t('go-back')}
        </Link>
      </div>
      {sectionParam && Object.keys(DETAILS_SECTIONS).includes(sectionParam) ? (
        <TextWithMedia
          title={translatedSections[sectionParam].title}
          titleLevel={TITLE_TYPES.h1}
          text={translatedSections[sectionParam].description}
          image={translatedSections[sectionParam].image}
        >
          {translatedSections[sectionParam].details && (
            <DetailsList
              details={translatedSections[sectionParam].details || []}
            />
          )}
        </TextWithMedia>
      ) : (
        <div>Redirect</div>
      )}
    </div>
  );
};

Details.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Details;
