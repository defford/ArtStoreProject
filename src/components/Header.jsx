import React from 'react';
import styles from '../styles/Header.module.css';

function Header({ title, subtitle }) {
  return (
    <header className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroTextbox}>
            <h2 className={styles.heroTitle}>{title}</h2>
            <p className={`${styles.heroSubtitle} subheading`}>{subtitle}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;




