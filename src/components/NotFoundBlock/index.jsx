import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено</h1>
      <span>😐</span>
      <p className={styles.description}>
        Такой страницы не существует
      </p>
    </div>
  )
}