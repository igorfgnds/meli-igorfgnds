import Image from 'next/image';

import styles from './styles.module.scss';

import { title } from '@/utils/constants';

const Hero = (): JSX.Element => {
  return (
    <div className={styles.hero}>
      <Image
        priority
        width={1600}
        height={340}
        alt={title}
        className={styles['hero--desktop']}
        src="https://http2.mlstatic.com/D_NQ_901977-MLA53638734700_022023-OO.webp"
      />
      <Image
        priority
        width={984}
        height={450}
        alt={title}
        className={styles['hero--mobile']}
        src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1675259453090-cmonsitemobile5-fretegratis.jpg"
      />
    </div>
  );
};

export default Hero;
