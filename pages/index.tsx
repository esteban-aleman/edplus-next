import { Home, MainLayout } from 'components/layout';
import { LOCALES } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import Head from 'next/head';
import Helmet from 'react-helmet';
import { NextPageWithLayout } from './page';

const HomePage: NextPageWithLayout<null> = () => {
  const { t } = useTranslation(LOCALES.ES);
  return (
    <>
      <Helmet htmlAttributes={{ lang: LOCALES.ES }} />
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
      <Home locale={LOCALES.ES} />
    </>
  );
};

HomePage.getLayout = (page) => {
  return <MainLayout locale={LOCALES.ES}>{page}</MainLayout>;
};

export default HomePage;
