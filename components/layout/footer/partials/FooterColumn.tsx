import { Link } from 'components/shared';
import styles from './FooterColumn.module.scss';
import { FooterColumnProps } from './FooterColumnProps';

const FooterColumn = (props: FooterColumnProps) => {
  const { title, links } = props;

  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
      <ul className={styles.linkList}>
        {links.map((l) => (
          <Link
            key={l.text}
            href={l.href}
            target={l.target}
            className={styles.link}
            text={l.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
