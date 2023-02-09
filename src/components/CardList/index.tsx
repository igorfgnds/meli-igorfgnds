import styles from './styles.module.scss';

import Card from '@/components/Card';

import { ItemInfo } from '@/interfaces/item';

export interface CardListProps {
  items: ItemInfo[];
}

const CardList = (props: CardListProps): JSX.Element => {
  return (
    <div className={styles.cardlist}>
      {props.items.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CardList;
