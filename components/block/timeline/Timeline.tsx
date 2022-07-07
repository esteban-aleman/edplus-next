import { Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import { useCallback, useState } from 'react';
import Entry from './partials/Entry';
import styles from './Timeline.module.scss';
import { TimelineProps } from './TimelineProps';

const Timeline = (props: TimelineProps) => {
  const { title, entries } = props;

  //Show if there's no JS enabled
  const [revealed, setRevealed] = useState(entries.map(() => true));

  const handleReveal = useCallback((isInView: boolean, index: number) => {
    setRevealed((prev) => {
      const updatedCopy = [...prev];
      updatedCopy[index] = isInView;
      return updatedCopy;
    });
  }, []);

  return (
    <section className={styles.root}>
      <Title
        title={title}
        type={TITLE_TYPES.h3}
        level={TITLE_TYPES.h2}
        className={styles.title}
      />
      <ol className={styles.list}>
        {entries.map((e, i) => (
          <Entry
            key={e.title}
            date={e.date}
            title={e.title}
            description={e.description}
            order={i}
            isFirst={i === 0}
            isLast={i + 1 === entries.length}
            revealLine={revealed[i + 1]}
            isInView={handleReveal}
          />
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
