import styles from './styles.module.scss';

import Paper from '@/components/Paper';

import { IconCard, IconCredit, IconPix } from '@/icons';

const Payment = (): JSX.Element => {
  return (
    <Paper className={styles.payment}>
      <div className={styles.payment__item}>
        <span className={styles.payment__mp}>
          Pagamento rápido e seguro com <strong>Mercado Pago</strong>
        </span>
      </div>
      <div className={styles.payment__item}>
        <IconCard />
        Até 10 parcelas sem juros
      </div>
      <div className={styles.payment__item}>
        <IconCredit />
        Parcelamento sem cartão
      </div>
      <div className={styles.payment__item}>
        <IconPix />
        Via Pix
      </div>
    </Paper>
  );
};

export default Payment;
