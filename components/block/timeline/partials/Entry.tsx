import classNames from 'classnames';
import { Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Entry.module.scss';
import { EntryProps } from './EntryProps';

const Entry = (props: EntryProps) => {
  const { date, title, description, order, isLast, revealLine, isInView } =
    props;

  //Show if there's no JS enabled
  const [revealed, setRevealed] = useState(true);

  const { ref } = useInView({
    onChange: (inView) => setRevealed(inView),
    triggerOnce: true,
  });

  //Hide if there's JS enabled
  useEffect(() => {
    isInView(revealed, order);
  }, [revealed, isInView, order]);

  return (
    <li
      className={classNames(styles.root, {
        [styles.odd]: order % 2 === 0,
        [styles.last]: isLast,
        [styles.reveal]: revealed,
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
