import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

import Badge from '@/components/Badge';
import Button from '@/components/Button';

import { formatMoney } from '@/utils/commons';

import { ItemInfo } from '@/interfaces/item';

export interface CardProps {
  item: ItemInfo;
}

const Card = (props: CardProps): JSX.Element => {
  return (
    <Link href={`/items/${props.item.id}`} className={styles.card}>
      <div className={styles.card__picture}>
        <Image width={90} height={90} alt={props.item.title} src={props.item.picture[0]} priority />
      </div>
      <div className={styles.card__content}>
        {props.item.free_shipping && <Badge variant="success">Frete grátis</Badge>}
        <div className={styles.card__price}>{formatMoney.format(props.item.price.amount)}</div>
        <h2 className={styles.card__title}>{props.item.title}</h2>
        <Button variant="primary">Comprar</Button>
      </div>
    </Link>
  );
};

export default Card;
