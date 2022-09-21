import React from 'react';

import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Nothing found :(</h1>
      <p className={styles.description}>Sorry, unfortunately the website is not available.</p>
    </div>
  );
};

export default NotFoundBlock