import classnames from 'classnames';
import { Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import Image from 'next/image';
import styles from './CarouselItem.module.scss';
import { CarouselItemProps } from './CarouselItemProps';

const CarouselItem = (props: CarouselItemProps) => {
  const { image, title, description, id, active, ariaLabel } = props;

  return (
    <li
      className={classnames(styles.root, { [styles.inactive]: !active })}
      id={id}
      aria-label={ariaLabel}
    >
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
          level={TITLE_TYPES.h3}
          type={TITLE_TYPES.h5}
        />
        <Text className={styles.text} text={description} />
      </div>
    </li>
  );
};

export default CarouselItem;
