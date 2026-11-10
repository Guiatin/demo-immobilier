import React from 'react';
import styles from './Contact.module.css';
import { agenceData } from '../data/agence';

export function Contact() {
  const cleanPhone = agenceData.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent("Bonjour, je souhaite des informations sur vos biens.")}`;

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nous contacter</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.itemLabel}>Téléphone</div>
            <a href={`tel:${agenceData.telephone}`} className={styles.itemValue}>
              {agenceData.telephone}
            </a>
            <div className={styles.itemLabel}>Adresse</div>
            <div className={styles.itemValue}>{agenceData.adresse}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.itemLabel}>Horaires d'ouverture</div>
            <div className={styles.itemValue}>
              Lun - Ven : 8h00 - 18h00<br />
              Sam : 9h00 - 13h00
            </div>
          </div>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
          Écrire sur WhatsApp
        </a>
      </div>
    </section>
  );
}
