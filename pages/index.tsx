import {
  CardsGrid,
  Hero,
  SimpleHero,
  TextWithMedia,
  TextWithMediaCarousel,
  Timeline,
} from 'components/block';
import { MainLayout } from 'components/layout';
import { Link } from 'components/shared';
import {
  activityCarouselItems,
  involvementCards,
  timelineEntries,
} from 'lib/pages-data/home';
import { CTA_TYPES, SIMPLE_HERO_TYPES } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import Head from 'next/head';
import HeroImage from 'public/media/images/hero1.jpg';
import Team from 'public/media/images/team1.jpg';
import { useMemo } from 'react';
import styles from 'styles/pages/index.module.scss';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const activitiesId = 'activities';
  const getInvolvedId = 'getInvolved';
  const { t } = useTranslation();

  const mappedTimeLineEntries = useMemo(() => {
    return timelineEntries.map((e) => {
      return {
        date: t(e.date),
        title: t(e.title),
        description: t(e.description),
      };
    });
  }, [t]);

  const mappedInvolvementCards = useMemo(() => {
    return involvementCards.map((c) => {
      return {
        ...c,
        linkText: t(c.linkText),
        title: t(c.title),
        description: t(c.description),
        imageAlt: t(c.imageAlt),
      };
    });
  }, [t]);

  const mappedActivities = useMemo(() => {
    return activityCarouselItems.map((a) => {
      return {
        ...a,
        title: t(a.title),
        description: t(a.description),
        imageAlt: t(a.imageAlt),
      };
    });
  }, [t]);

  return (
    <>
      <Head>
        <title>Educacion Plus</title>
        <meta name="description" content={t('who-is-edplus')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        eyebrow={t('make-a-difference')}
        title={t('you-can-help')}
        ctaText={t('what-are-we-doing')}
        backgroundImage={HeroImage}
        ctaReferenceId={activitiesId}
      />
      <TextWithMedia
        title={t('who-are-we')}
        text={t('who-is-edplus')}
        image={Team}
        imageAlt={t('who-are-we-image-alt')}
      />
      <Timeline
        entries={mappedTimeLineEntries}
        title={t('where-do-we-come-from')}
      />
      <SimpleHero
        type={SIMPLE_HERO_TYPES.primary}
        title={t('how-to-get-involved')}
        text={t('how-to-get-involved-description')}
        id={getInvolvedId}
      />
      <CardsGrid cards={mappedInvolvementCards} />
      <TextWithMediaCarousel
        title={t('activities')}
        description={t('activities-description')}
        carouselItems={mappedActivities}
        id={activitiesId}
      />
      <SimpleHero
        type={SIMPLE_HERO_TYPES.light}
        title={t('ready-to-get-involved')}
        text={t('ready-to-get-involved-description')}
      >
        <Link
          text={t('how-to-get-involved')}
          className={styles.getInvolvedButton}
          href={`#${getInvolvedId}`}
          cta={CTA_TYPES.primary}
        />
      </SimpleHero>
    </>
  );
};

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
