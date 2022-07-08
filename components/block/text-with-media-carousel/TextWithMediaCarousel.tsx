import classnames from 'classnames';
import { Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import { useEffect, useRef, useState } from 'react';
import CarouselItem from './partials/CarouselItem';
import styles from './TextWithMediaCarousel.module.scss';
import { TextWithMediaCarouselProps } from './TextWithMediaCarouselProps';

const TextWithMediaCarousel = (props: TextWithMediaCarouselProps) => {
  const { id, title, description, carouselItems } = props;
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoMode, setAutoMode] = useState(true);
  const slidesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    slidesRef.current = slidesRef.current.slice(0, carouselItems.length);
  }, [carouselItems.length]);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;
    if (autoMode) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % carouselItems.length);
      }, 3000);
    } else {
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

        <section
          className={styles.carouselContainer}
          aria-label={t('activities-carousel')}
          onMouseEnter={() => setAutoMode(false)}
          onMouseLeave={() => setAutoMode(true)}
          onFocus={() => setAutoMode(false)}
          onBlur={() => setAutoMode(true)}
          tabIndex={-1}
        >
          <div className={styles.slides}>
            {carouselItems.map((c, i) => (
              <CarouselItem
                key={c.title}
                image={c.image}
                imageAlt={c.imageAlt}
                title={c.title}
                description={c.description}
                active={activeSlide === i}
                id={getSlideId(i, c.title)}
                ariaLabel={t(
                  'current-slide',
                  (i + 1).toString(),
                  carouselItems.length.toString()
                )}
                ref={(el: HTMLDivElement) => (slidesRef.current[i] = el)}
              />
            ))}
          </div>
          <div className={styles.pagination}>
            {carouselItems.map((c, i) => (
              <button
                key={i}
                aria-controls={getSlideId(i, c.title)}
                aria-label={`${t('go-to-slide')} ${i + 1}`}
                className={styles.paginationButton}
                aria-current={activeSlide === i}
                onClick={() => {
                  setActiveSlide(i);
                  slidesRef.current[i].focus();
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
        </section>
      </div>
    </section>
  );
};

export default TextWithMediaCarousel;
