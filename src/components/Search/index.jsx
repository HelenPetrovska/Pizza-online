import React from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className={styles.root}>
      <input
        type="text"
        placeholder="Поиск..."
        className={styles.input}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {searchValue && 
        <button
          type="buttonn"
          className={styles.clear}
          onClick={() => setSearchValue('')}
        >
          X
        </button>
      }
    </div>
  )
}

export default Search;