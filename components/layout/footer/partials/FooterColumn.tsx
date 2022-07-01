import { Link } from 'components/shared';
import styles from './FooterColumn.module.scss';
import { FooterColumnProps } from './FooterColumnProps';

const FooterColumn = (props: FooterColumnProps) => {
  const { title, links } = props;

  return (
    <div className={styles.root}>
      <h2
        className={styles.title}
        id={`footer-column-${title.replace(/ /g, '')}`}
      >
        {title}
      </h2>
      <ul
        className={styles.linkList}
        aria-labelledby={`footer-column-${title.replace(/ /g, '')}`}
      >
        {links.map((l) => (
          <li key={l.text} className={styles.linkListItem}>
            <Link
              href={l.href}
              target={l.target}
              className={styles.link}
              text={l.text}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
