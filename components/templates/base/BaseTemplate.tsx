import styles from './BaseTemplate.module.scss';
import { BaseTemplateProps } from './BaseTemplateProps';

const BaseTemplate = (props: BaseTemplateProps) => {
  const { sampleTextProp } = props;
  return <div className={styles.root}>{sampleTextProp}</div>;
};

export default BaseTemplate;
