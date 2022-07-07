import { Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import { useTranslation } from 'lib/utils/i18n/useTranslation';
import CarouselItem from './partials/CarouselItem';
import styles from './TextWithMediaCarousel.module.scss';
import { TextWithMediaCarouselProps } from './TextWithMediaCarouselProps';

const TextWithMediaCarousel = (props: TextWithMediaCarouselProps) => {
  const { id, title, description, carouselItems } = props;

  const { t } = useTranslation();

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

        <div className={styles.carouselContainer} aria-label={'Bananas'}>
          {carouselItems.map((c, i) => (
            <CarouselItem
              key={c.title}
              image={c.image}
              title={c.title}
              description={c.description}
              ariaLabel={t(
                'card-of',
                (i + 1).toString(),
                carouselItems.length.toString()
              )}
            />
          ))}
          <div>
            {carouselItems.map((_c, i) => (
              <button key={i}>control</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithMediaCarousel;
