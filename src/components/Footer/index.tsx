import React from 'react';

import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} | Application developed by Gabriel
        Rosa
      </p>
    </footer>
  );
}

export default Footer;
