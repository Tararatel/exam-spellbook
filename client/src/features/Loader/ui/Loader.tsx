import React from 'react';
import MagicCat from './img/loader.gif';
import styles from './Loader.module.scss';

function Loader(): React.JSX.Element {
  return (
    <div className={styles.loader}>
      <img src={MagicCat} alt="вжух" />
    </div>
  );
}

export default Loader;
