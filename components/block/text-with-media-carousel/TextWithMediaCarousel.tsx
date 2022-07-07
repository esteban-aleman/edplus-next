import classnames from 'classnames';
import { Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import { useEffect, useState } from 'react';
import CarouselItem from './partials/CarouselItem';
import styles from './TextWithMediaCarousel.module.scss';
import { TextWithMediaCarouselProps } from './TextWithMediaCarouselProps';

const TextWithMediaCarousel = (props: TextWithMediaCarouselProps) => {
  const { id, title, description, carouselItems } = props;
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoMode, setAutoMode] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    if (!autoMode) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [carouselItems.length, autoMode]);

  const getSlideId = (index: number, title: string) => {
    return `carousel-item-${index}-${title.replaceAll(' ', '-')}`;
  };

  return (
    <section id={id} className={styles.root}>
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <Title
            title={title}
            className={styles.title}
            level={TITLE_TYPES.h2}
            type={TITLE_TYPES.h3}
          />
          <Text text={description} className={styles.text} />
        </div>

        <div className={styles.carouselContainer}>
          <ul className={styles.slides}>
            {carouselItems.map((c, i) => (
              <CarouselItem
                key={c.title}
                image={c.image}
                title={c.title}
                description={c.description}
                active={activeSlide === i}
                id={getSlideId(i, c.title)}
                ariaLabel={t(
                  'card-of',
                  (i + 1).toString(),
                  carouselItems.length.toString()
                )}
              />
            ))}
          </ul>
          <div className={styles.pagination}>
            {carouselItems.map((c, i) => (
              <button
                key={i}
                aria-controls={getSlideId(i, c.title)}
                aria-label={`${t('go-to-slide')} ${i + 1}`}
                className={styles.paginationButton}
                onClick={() => {
                  setActiveSlide(i);
                  setAutoMode(false);
                }}
              >
                <span
                  className={classnames(styles.paginationBullet, {
                    [styles.paginationBulletActive]: activeSlide === i,
                  })}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithMediaCarousel;
