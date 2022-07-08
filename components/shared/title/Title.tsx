import classnames from 'classnames';
import styles from './Title.module.scss';
import { TitleProps } from './TitleProps';

const Title = (props: TitleProps) => {
  const { id, title, type, level, className } = props;
  const Tag = level;
  return (
    <Tag id={id} className={classnames(styles[type], className)} {...props}>
      {title}
    </Tag>
  );
};

export default Title;
