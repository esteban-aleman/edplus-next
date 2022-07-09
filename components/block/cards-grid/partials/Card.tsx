import { Link, Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import Image from 'next/image';
import styles from './Card.module.scss';
import { CardProps } from './CardProps';

const Card = (props: CardProps) => {
  const { image, title, description, linkText, linkUrl, imageAlt } = props;
  return (
    <li className={styles.root}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image
            src={image}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Title
          className={styles.title}
          title={title}
          level={TITLE_TYPES.h3}
          type={TITLE_TYPES.h4}
        />
        <Text className={styles.text} text={description} />
        <Link className={styles.link} href={linkUrl}>
          {linkText}
        </Link>
      </div>
    </li>
  );
};

export default Card;
