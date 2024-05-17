import {
  CardsGrid,
  Hero,
  SimpleHero,
  TextWithMedia,
  TextWithMediaCarousel,
  Timeline,
} from 'components/block';
import { Link, Text } from 'components/shared';
import PayPalIcon from 'lib/icons/paypal';
import {
  activityCarouselItems,
  involvementCards,
  timelineEntries,
} from 'lib/pages-data/home';
import {
  CTA_TYPES,
  PAYPAL_LINK,
  SIMPLE_HERO_TYPES,
  TARGET_BLANK,
} from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import HeroImage from 'public/media/images/hero1.jpg';
import Team from 'public/media/images/team.jpeg';
import { useMemo } from 'react';
import styles from './Home.module.scss';
import { HomeProps } from './HomeProps';

const Home = (props: HomeProps) => {
  const { locale } = props;
  const activitiesId = 'activities';
  const getInvolvedId = 'getInvolved';
  const { t } = useTranslation(locale);

  const mappedTimeLineEntries = useMemo(() => {
    return timelineEntries.map((e) => {
      return {
        date: e.date ? t(e.date) : null,
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
        linkUrl: `/${locale}${c.linkUrl}`,
      };
    });
  }, [t, locale]);

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
      <Hero
        eyebrow={t('hero-eyebrow')}
        title={t('hero-title')}
        ctaText={t('hero-cta')}
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
      <TextWithMediaCarousel
        title={t('activities')}
        description={t('activities-description')}
        carouselItems={mappedActivities}
        id={activitiesId}
        locale={locale}
      />
      <SimpleHero
        type={SIMPLE_HERO_TYPES.primary}
        title={t('how-to-get-involved')}
        text={t('how-to-get-involved-description')}
        id={getInvolvedId}
      >
        <Link href={PAYPAL_LINK} target={TARGET_BLANK} cta={CTA_TYPES.paypal}>
          <PayPalIcon /> <Text text={t('donate-paypal')} />
        </Link>
      </SimpleHero>
      <CardsGrid cards={mappedInvolvementCards} />
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

export default Home;
