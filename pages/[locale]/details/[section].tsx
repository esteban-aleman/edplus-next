import { DetailsList, TextWithMedia } from 'components/block';
import { DetailLayout, MainLayout } from 'components/layout';
import { Sections, sections } from 'lib/pages-data/details';
import { DETAILS_SECTIONS, LOCALES, TITLE_TYPES } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import Head from 'next/head';
import { useMemo } from 'react';
import { NextPageWithLayout } from '../../page';

import Helmet from 'react-helmet';
const Details: NextPageWithLayout<{
  section: string;
  locale: string;
}> = ({ section, locale }) => {
  const { t } = useTranslation(locale);

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
      <Helmet htmlAttributes={{ lang: locale }} />
      <Head>
        <title>{translatedSections[section].title}</title>
        <meta
          name="description"
          content={translatedSections[section].description?.substring(0, 160)}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={translatedSections[section].title} />
        <meta
          property="og:description"
          content={translatedSections[section].description?.substring(0, 60)}
        />
        <meta
          property="og:image"
          content={'http://www.educacionplus.org/logo.cecc779a.png'}
        />
      </Head>
      <TextWithMedia
        title={translatedSections[section].title}
        titleLevel={TITLE_TYPES.h1}
        text={translatedSections[section].description}
        image={translatedSections[section].image}
        imageAlt={translatedSections[section].imageAlt}
        imagePriority={true}
      >
        {translatedSections[section].details && (
          <DetailsList details={translatedSections[section].details || []} />
        )}
      </TextWithMedia>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: Object.values(LOCALES)
      .map((locale) => {
        return Object.values(DETAILS_SECTIONS).map((section) => ({
          params: {
            locale,
            section,
          },
        }));
      })
      .flat(),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { section: string; locale: string };
}) {
  return { props: { ...params } };
}

Details.getLayout = (page) => {
  return (
    <MainLayout locale={page.props.locale}>
      <DetailLayout locale={page.props.locale}>{page}</DetailLayout>
    </MainLayout>
  );
};

export default Details;
