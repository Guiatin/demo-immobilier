import React from 'react';
import styles from './Navbar.module.css';
import { agenceData } from '../data/agence';

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <a href="#" className={styles.logo}>{agenceData.nom}</a>
        <a href={`tel:${agenceData.telephone}`} className={styles.contactBtn}>
          Nous contacter
        </a>
      </div>
    </header>
  );
}
