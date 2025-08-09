import React, { useState } from 'react';
import styles from './HomePage.module.scss';

function HomePage(): React.JSX.Element {
  const [showForm, setShowForm] = useState(false);

  const handleSpellCreated = () => {
    setShowForm(false);
  };
  return (
    <>
      <title>Главная</title>

      <main>
        <h2>
          Создавайте могущественные заклинания в магическом котле и записывайте их в древнюю книгу
          заклинаний
        </h2>
        <section>
          <div className={styles.block}>
            <h1>🪄 Генератор заклинаний</h1>
            <p>
              Создавайте уникальные магические заклинания, комбинируя латинские корни с мощными
              эффектами
            </p>
          </div>

          {/* Action Buttons */}
          <div className={styles.block}>
            <button onClick={() => setShowForm(!showForm)}>
              {showForm ? '📖 Показать заклинания' : '➕ Создать заклинание'}
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
