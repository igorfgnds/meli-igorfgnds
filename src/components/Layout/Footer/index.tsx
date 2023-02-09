import Link from 'next/link';

import styles from './styles.module.scss';
import layout from '@/theme/layout.module.scss';

import { author } from '@/utils/constants';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={layout.container}>
        Developed with 💛 by{' '}
        <Link href="https://github.com/igorfgnds" target="_blank">
          {author.name} {author.lastname}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
