import classnames from 'classnames';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonProps';

const Button = (props: ButtonProps) => {
  const { type, text, callback, className } = props;
  return (
    <button
      className={classnames(styles.root, styles[type], className)}
      onClick={callback}
    >
      {text}
    </button>
  );
};

export default Button;
