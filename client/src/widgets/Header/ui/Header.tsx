import { Link } from 'react-router';
import styles from './Header.module.scss';

const Header = (): React.JSX.Element => (
  <header className={styles.header}>
    <h1>Создай своё заклинание</h1>
    <nav>
      <Link to="/">Абракадабра</Link>
      <Link to="/spells">Заклинания</Link>
    </nav>
  </header>
);

export default Header;
