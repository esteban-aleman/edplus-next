import { Button, Title } from 'components/shared';
import { BUTTON_TYPES, TITLE_TYPES } from 'lib/utils/constants';
import Image from 'next/image';
import styles from './Hero.module.scss';
import { HeroProps } from './HeroProps';

const Hero = (props: HeroProps) => {
  const { backgroundImage, eyebrow, title, ctaText, ctaCallback } = props;
  return (
    <section className={styles.root}>
      <div className={styles.backgroundWrapper}>
        <Image
          src={backgroundImage}
          alt={''}
          layout="fill"
          objectFit="cover"
          aria-hidden={true}
          role="presentation"
          placeholder="blur"
          priority
        />
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <Title
          title={title}
          type={TITLE_TYPES.h3}
          level={TITLE_TYPES.h1}
          className={styles.title}
        />
        <Button
          type={BUTTON_TYPES.secondary}
          text={ctaText}
          callback={ctaCallback}
        />
      </div>
    </section>
  );
};

export default Hero;
