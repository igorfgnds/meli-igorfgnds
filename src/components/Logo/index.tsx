import Link from 'next/link';

import styles from './styles.module.scss';

import { title } from '@/utils/constants';

const Logo = (): JSX.Element => {
  return (
    <h1 className={styles.logo}>
      <Link href="/">{title}</Link>
    </h1>
  );
};

export default Logo;
