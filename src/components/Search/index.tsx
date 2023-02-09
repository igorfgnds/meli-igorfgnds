import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

import { IconSearch } from '@/icons';

const Search = (): JSX.Element => {
  const router = useRouter();

  const [value, setValue] = useState<string>((router.query.search as string) || '');

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && handleSearch();
  };

  const handleSearch = () => {
    value.length > 0 && router.push(`/items?search=${value}`);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={value}
        onChange={handleValue}
        onKeyDown={handleKeyEnter}
        className={styles.search__field}
        placeholder="Nunca pare de buscar"
      />
      <button className={styles.search__button} onClick={handleSearch}>
        <span className={styles.search__icon}>
          <IconSearch />
        </span>
      </button>
    </div>
  );
};

export default Search;
