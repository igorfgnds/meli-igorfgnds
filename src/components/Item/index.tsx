import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';
import animations from '@/theme/motion.module.scss';

import Badge from '@/components/Badge';

import { formatMoney } from '@/utils/commons';

import { ItemInfo } from '@/interfaces/item';

export interface ItemProps {
  item: ItemInfo;
}

const Item = (props: ItemProps): JSX.Element => {
  return (
    <Link href={`/items/${props.item.id}`} className={`${styles.item} ${animations.fadein}`}>
      <div className={styles.item__picture}>
        <Image width={90} height={90} alt={props.item.title} src={props.item.picture[0]} priority />
      </div>
      <div className={styles.item__details}>
        <span className={styles.item__price}>{formatMoney.format(props.item.price.amount)}</span>
        <h2 className={styles.item__title}>{props.item.title}</h2>
        {props.item.free_shipping && (
          <Badge variant="success" className={styles.item__shipping}>
            Frete grátis
          </Badge>
        )}
        <Badge variant="secondary" className={styles.item__condition}>
          {props.item.condition === 'new' ? 'Novo' : 'Usado'}
        </Badge>
      </div>
    </Link>
  );
};

export default Item;
