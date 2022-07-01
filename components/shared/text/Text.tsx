import classNames from 'classnames';
import styles from './Text.module.scss';
import { TextProps } from './TextProps';

const Text = (props: TextProps): JSX.Element => {
  const { text, tag, className } = props;
  const Tag = tag || 'p';
  return <Tag className={classNames(styles.root, className)}>{text}</Tag>;
};

export default Text;
