import classnames from 'classnames';
import { Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import styles from './SimpleHero.module.scss';
import { SimpleHeroProps } from './SimpleHeroProps';

const SimpleHero = (props: SimpleHeroProps) => {
  const { id, title, text, type, children } = props;
  return (
    <section id={id} className={classnames(styles.root, styles[type])}>
      <Title
        title={title}
        type={TITLE_TYPES.h3}
        level={TITLE_TYPES.h2}
        className={styles.title}
      />
      <Text text={text} className={styles.text} />
      {children}
    </section>
  );
};

export default SimpleHero;
