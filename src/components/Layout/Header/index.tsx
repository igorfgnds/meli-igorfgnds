import styles from './styles.module.scss';
import layout from '@/theme/layout.module.scss';

import Logo from '@/components/Logo';
import Search from '@/components/Search';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={`${layout.container} ${styles.header__wrap}`}>
        <Logo />
        <Search />
      </div>
    </header>
  );
};

export default Header;
