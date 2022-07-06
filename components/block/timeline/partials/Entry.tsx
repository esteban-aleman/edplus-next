import classNames from 'classnames';
import { Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import { useInView } from 'react-intersection-observer';
import styles from './Entry.module.scss';
import { EntryProps } from './EntryProps';

const Entry = (props: EntryProps) => {
  const { date, title, description, order, isLast, revealLine, isInView } =
    props;

  const { ref, inView } = useInView({
    onChange: (inView) => isInView(inView),
    triggerOnce: true,
  });

  return (
    <li
      className={classNames(styles.root, {
        [styles.odd]: order % 2 === 0,
        [styles.last]: isLast,
        [styles.reveal]: inView,
        [styles.revealLine]: revealLine,
      })}
      ref={ref}
    >
      <div className={styles.contentRight}>
        <span>{date}</span>
      </div>
      <div className={styles.contentLeft}>
        <Title
          title={title}
          type={TITLE_TYPES.h4}
          level={TITLE_TYPES.h3}
          className={styles.title}
        />
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default Entry;
