import { DetailsList, TextWithMedia } from 'components/block';
import { DetailLayout, MainLayout } from 'components/layout';
import { Sections, sections } from 'lib/pages-data/details';
import { DETAILS_SECTIONS, TITLE_TYPES } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { NextPageWithLayout } from '../page';

const Details: NextPageWithLayout<{
  section: string;
}> = ({ section }) => {
  const router = useRouter();
  const [sectionParam, setSectionParam] = useState(section);
  const { t } = useTranslation();

  const isValidSection = useMemo(
    () => Object.keys(DETAILS_SECTIONS).includes(sectionParam),
    [sectionParam]
  );

  useEffect(() => {
    setSectionParam(router.query.section?.toString() || '');
  }, [router.query.section]);

  const translatedSections = useMemo(() => {
    const keys = Object.keys(sections);
    const translatedSections: Sections = {};
    keys.forEach((k) => {
      translatedSections[k] = {
        ...sections[k],
        imageAlt: t(sections[k].imageAlt),
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
  }, [t]);

  return (
    <>
      {isValidSection && (
        <Head>
          <title>{translatedSections[sectionParam].title}</title>
          <meta
            name="description"
            content={translatedSections[sectionParam].description?.substring(
              0,
              160
            )}
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            property="og:title"
            content={translatedSections[sectionParam].title}
          />
          <meta
            property="og:description"
            content={translatedSections[sectionParam].description?.substring(
              0,
              60
            )}
          />
          <meta
            property="og:image"
            content={'http://www.educacionplus.org/logo.cecc779a.png'}
          />
        </Head>
      )}
      {isValidSection && (
        <TextWithMedia
          title={translatedSections[sectionParam].title}
          titleLevel={TITLE_TYPES.h1}
          text={translatedSections[sectionParam].description}
          image={translatedSections[sectionParam].image}
          imageAlt={translatedSections[sectionParam].imageAlt}
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { section: DETAILS_SECTIONS.contact } },
      { params: { section: DETAILS_SECTIONS.mission } },
      { params: { section: DETAILS_SECTIONS.vision } },
      { params: { section: DETAILS_SECTIONS.donate } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { section: string };
}) {
  return { props: { section: params.section || '' } };
}

Details.getLayout = (page) => {
  return (
    <MainLayout>
      <DetailLayout>{page}</DetailLayout>
    </MainLayout>
  );
};

export default Details;
