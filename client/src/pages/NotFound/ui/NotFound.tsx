import React from 'react';
import { Link } from 'react-router';
import styles from './NotFound.module.scss';
import Nya from './assets/img/nya.jpg';

const NotFound = (): React.JSX.Element => (
  <main className={styles.notFound}>
      <Link to="/" className={styles.button}>
        <img src={Nya} alt="няяяяя" />
      </Link>
  </main>
);

export default NotFound;
