import React from 'react';

import styles from './Search.module.scss';

const Search = ({
  searchValue,
  setSearchValue,
}) => {
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