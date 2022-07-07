import { Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import Image from 'next/image';
import styles from './CarouselItem.module.scss';
import { CarouselItemProps } from './CarouselItemProps';

const CarouselItem = (props: CarouselItemProps) => {
  const { image, title, description } = props;

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image
          src={image}
          alt={'needsAlt'}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <div className={styles.textContent}>
        <Title
          className={styles.title}
          title={title}
          level={TITLE_TYPES.span}
          type={TITLE_TYPES.h5}
        />
        <Text className={styles.text} text={description} />
      </div>
    </div>
  );
};

export default CarouselItem;
