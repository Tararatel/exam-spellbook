import React from 'react';
import styles from './Footer.module.scss';

const Footer = (): React.JSX.Element => (
  <footer className={styles.footer}>
    <h5 className={styles.footer__copy}>Assessment by Elbrus Bootcamp </h5>
  </footer>
);

export default Footer;
