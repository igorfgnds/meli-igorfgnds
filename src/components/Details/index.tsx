import styles from './styles.module.scss';

import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Gallery from '@/components/Gallery';

import { formatMoney } from '@/utils/commons';

import { ItemDetails, ItemInfo } from '@/interfaces/item';

export interface DetailsProps {
  item: ItemInfo & ItemDetails;
}

const Details = (props: DetailsProps): JSX.Element => {
  return (
    <>
      <div className={styles.details__content}>
        <div className={styles.details__pictures}>
          <Gallery pictures={props.item.picture} />
        </div>

        <div className={styles.details__infos}>
          {props.item.free_shipping && (
            <Badge variant="success" className={styles.details__shipping}>
              Frete grátis
            </Badge>
          )}

          <Badge variant="secondary">{props.item.condition === 'new' ? 'Novo' : 'Usado'}</Badge>

          <span className={styles.details__sold}>
            {props.item.sold_quantity > 4 && '+'}
            {props.item.sold_quantity} vendidos
          </span>

          <h1 className={styles.details__title}>{props.item.title}</h1>

          <span className={styles.details__price}>{formatMoney.format(props.item.price.amount)}</span>

          <div className={styles.details__buttons}>
            <Button variant="primary">Comprar</Button>
            <Button variant="secondary">Adicionar ao carrinho</Button>
          </div>
        </div>
      </div>
      <div className={styles.details__description}>
        <h2>O que você precisa saber sobre este produto:</h2>
        <p>{props.item.description}</p>
      </div>
    </>
  );
};

export default Details;
