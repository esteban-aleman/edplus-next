import { Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import Image from 'next/image';
import styles from './TextWithMedia.module.scss';
import { TextWithMediaProps } from './TextWithMediaProps';

const TextWithMedia = (props: TextWithMediaProps) => {
  const { title, text, image, children } = props;
  return (
    <div className={styles.root}>
      <div className={styles.contentLeft}>
        <Title
          title={title}
          type={TITLE_TYPES.h3}
          level={TITLE_TYPES.h2}
          className={styles.title}
        />
        {text && <Text text={text} className={styles.text} />}
        {children}
      </div>
      <div className={styles.contentRight}>
        <div className={styles.image}>
          <Image
            src={image}
            alt={'Needs Alt'}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default TextWithMedia;
