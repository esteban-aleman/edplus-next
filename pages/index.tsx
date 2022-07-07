import {
  CardsGrid,
  Hero,
  SimpleHero,
  TextWithMedia,
  TextWithMediaCarousel,
  Timeline,
} from 'components/block';
import { CardProps } from 'components/block/cards-grid/partials/CardProps';
import { CarouselItemProps } from 'components/block/text-with-media-carousel/partials/CarouselItemProps';
import { TimelineEntryProps } from 'components/block/timeline/TimelineProps';
import { MainLayout } from 'components/layout';
import { Button } from 'components/shared';
import {
  activityCarouselItems,
  involvementCards,
  timelineEntries,
} from 'lib/pages-data/home';
import { BUTTON_TYPES, SIMPLE_HERO_TYPES } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import Head from 'next/head';
import HeroImage from 'public/media/images/hero1.jpg';
import Team from 'public/media/images/team1.jpg';
import styles from 'styles/pages/index.module.scss';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const activitiesId = 'activities';
  const getInvolvedId = 'getInvolved';
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el && el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const mapTimeLineEntries = (
    entries: Array<TimelineEntryProps>
  ): Array<TimelineEntryProps> => {
    return entries.map((e) => {
      return {
        date: t(e.date),
        title: t(e.title),
        description: t(e.description),
      };
    });
  };

  const mapInvolvementCards = (entries: Array<CardProps>): Array<CardProps> => {
    return entries.map((c) => {
      return {
        ...c,
        linkText: t(c.linkText),
        title: t(c.title),
        description: t(c.description),
      };
    });
  };

  const mapActivities = (
    entries: Array<CarouselItemProps>
  ): Array<CarouselItemProps> => {
    return entries.map((a) => {
      return {
        ...a,
        title: t(a.title),
        description: t(a.description),
      };
    });
  };

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
        ctaCallback={() => scrollTo(activitiesId)}
        backgroundImage={HeroImage}
      />
      <TextWithMedia
        title={t('who-are-we')}
        text={t('who-is-edplus')}
        image={Team}
      />
      <Timeline
        entries={mapTimeLineEntries(timelineEntries)}
        title={t('where-do-we-come-from')}
      />
      <SimpleHero
        type={SIMPLE_HERO_TYPES.primary}
        title={t('how-to-get-involved')}
        text={t('how-to-get-involved-description')}
        id={getInvolvedId}
      />
      <CardsGrid cards={mapInvolvementCards(involvementCards)} />
      <TextWithMediaCarousel
        title={t('activities')}
        description={t('activities-description')}
        carouselItems={mapActivities(activityCarouselItems)}
        id={activitiesId}
      />
      <SimpleHero
        type={SIMPLE_HERO_TYPES.light}
        title={t('ready-to-get-involved')}
        text={t('ready-to-get-involved-description')}
      >
        <Button
          type={BUTTON_TYPES.primary}
          text={t('how-to-get-involved')}
          className={styles.getInvolvedButton}
          callback={() => scrollTo(getInvolvedId)}
        />
      </SimpleHero>
    </>
  );
};

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
