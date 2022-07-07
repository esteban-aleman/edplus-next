import classnames from 'classnames';
import styles from './Text.module.scss';
import { TextProps } from './TextProps';

const Text = (props: TextProps) => {
  const { text, tag, className } = props;
  const Tag = tag || 'p';
  return <Tag className={classnames(styles.root, className)}>{text}</Tag>;
};

export default Text;
