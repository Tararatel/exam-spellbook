import React from 'react';
import { Link } from 'react-router';
import styles from './NotFound.module.scss';

const NotFound = (): React.JSX.Element => (
  <main className={styles.notFound}>
    <title>404 - Страница не найдена</title>
    <meta name="description" content="Avadakedavra - Страница не найдена" />
    <section>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Страница не найдена</h2>
      <p className={styles.message}>
        Кажется, вы забрели куда-то не туда. Давайте вернёмся на главную!
      </p>
      <Link to="/" className={styles.button} aria-label="Вернуться на главную страницу">
        На главную
      </Link>
    </section>
  </main>
);

export default NotFound;
