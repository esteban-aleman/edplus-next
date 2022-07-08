import styles from './CardsGrid.module.scss';
import { CardsGridProps } from './CardsGridProps';
import Card from './partials/Card';

const CardsGrid = (props: CardsGridProps) => {
  const { cards } = props;
  return (
    <section>
      <ul className={styles.root}>
        {cards.map((c) => (
          <Card
            key={c.title}
            image={c.image}
            title={c.title}
            description={c.description}
            linkText={c.linkText}
            linkUrl={c.linkUrl}
            imageAlt={c.imageAlt}
          />
        ))}
      </ul>
    </section>
  );
};

export default CardsGrid;
