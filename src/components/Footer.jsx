import React from 'react';
import styles from './Footer.module.css';
import { agenceData } from '../data/agence';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.agencyName}>{agenceData.nom}</div>
        <div className={styles.demoNotice}>Maquette de démonstration</div>
        <div className={styles.year}>&copy; {currentYear} Tous droits réservés</div>
      </div>
    </footer>
  );
}
