import { Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import styles from './DetailsList.module.scss';
import { DetailsListProps } from './DetailsListProps';

const DetailsList = (props: DetailsListProps) => {
  const { details } = props;
  return (
    <div className={styles.root}>
      {details.map((d) => (
        <div key={d.title}>
          <Title
            title={d.title}
            type={TITLE_TYPES.h5}
            level={TITLE_TYPES.h2}
            className={styles.title}
          />
          <Text text={d.text} className={styles.text} />
        </div>
      ))}
    </div>
  );
};

export default DetailsList;
