import { useRouter } from 'next/router';

import styles from './styles.module.scss';
import motion from '@/theme/motion.module.scss';

import Paper from '@/components/Paper';

interface Empty {
  is404?: boolean;
}

const Empty = (props: Empty): JSX.Element => {
  const router = useRouter();

  return (
    <Paper className={`${styles.empty} ${motion.fadein}`}>
      {props.is404 ? (
        <>
          <p>Página não encontrada</p>
        </>
      ) : (
        <>
          Nenhum resultado encontrado para: <strong>{router.query.search}</strong>
        </>
      )}
    </Paper>
  );
};

export default Empty;
