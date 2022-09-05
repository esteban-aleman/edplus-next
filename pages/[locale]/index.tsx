import { Home, MainLayout } from 'components/layout';
import { LOCALES } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import Head from 'next/head';
import Helmet from 'react-helmet';
import { NextPageWithLayout } from '../page';

const LocalizedHomePage: NextPageWithLayout<{
  locale: string;
}> = ({ locale }) => {
  const { t } = useTranslation(locale);

  return (
    <>
      <Helmet htmlAttributes={{ lang: locale }} />
      <Head>
        <title>{t('home-meta-title')}</title>
        <meta name="description" content={t('home-meta-description')} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={t('home-meta-title')} />
        <meta property="og:description" content={t('home-meta-description')} />
        <meta
          property="og:image"
          content={'http://www.educacionplus.org/logo.cecc779a.png'}
        />
      </Head>
      <Home locale={locale} />
    </>
  );
};

LocalizedHomePage.getLayout = (page) => {
  return <MainLayout locale={page.props.locale}>{page}</MainLayout>;
};

export async function getStaticPaths() {
  return {
    paths: Object.values(LOCALES).map((locale) => ({
      params: {
        locale,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { locale: string };
}) {
  return {
    props: {
      ...params,
    },
  };
}

export default LocalizedHomePage;
