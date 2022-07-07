import { DetailsList, TextWithMedia } from 'components/block';
import { DetailLayout, MainLayout } from 'components/layout';
import { Sections, sections } from 'lib/pages-data/details';
import { DETAILS_SECTIONS, TITLE_TYPES } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { NextPageWithLayout } from '../page';

const Details: NextPageWithLayout = () => {
  const router = useRouter();
  const { section } = router.query;
  const sectionParam = section?.toString();
  const { t } = useTranslation();

  useEffect(() => {
    if (
      !(sectionParam && Object.keys(DETAILS_SECTIONS).includes(sectionParam))
    ) {
      router.push('/');
    }
  }, [sectionParam, router]);

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
    <>
      {sectionParam && Object.keys(DETAILS_SECTIONS).includes(sectionParam) && (
        <Head>
          <title>{translatedSections[sectionParam].title}</title>
          <meta
            name="description"
            content={`Educacion Plus - ${translatedSections[sectionParam].title}`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      )}
      {sectionParam && Object.keys(DETAILS_SECTIONS).includes(sectionParam) && (
        <TextWithMedia
          title={translatedSections[sectionParam].title}
          titleLevel={TITLE_TYPES.h1}
          text={translatedSections[sectionParam].description}
          image={translatedSections[sectionParam].image}
          imagePriority={true}
        >
          {translatedSections[sectionParam].details && (
            <DetailsList
              details={translatedSections[sectionParam].details || []}
            />
          )}
        </TextWithMedia>
      )}
    </>
  );
};

Details.getLayout = (page) => {
  return (
    <MainLayout>
      <DetailLayout>{page}</DetailLayout>
    </MainLayout>
  );
};

export default Details;
