import React from 'react';
import styles from './Hero.module.css';
import { agenceData } from '../data/agence';

export function Hero() {
  const cleanPhone = agenceData.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent("Bonjour, je souhaite des informations sur vos biens.")}`;

  return (
    <main className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Acheter ou louer à Ouaga 2000, Zogona et Koulouba.
          </h1>
          <p className={styles.tagline}>
            Villas, appartements et terrains à Ouagadougou. Nous vous accompagnons de la visite à la signature.
          </p>
          <div className={styles.actions}>
            <a href="#biens" className={styles.primaryBtn}>
              Voir les biens
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              WhatsApp
            </a>
          </div>
        </div>

        <section id="biens">
          <h2 className={styles.sectionTitle}>Biens sélectionnés</h2>
          <div className={styles.propertiesList}>
            {agenceData.biens.map((bien) => (
              <article key={bien.id} className={styles.propertyCard}>
                <img
                  className={styles.photoPlaceholder}
                  src="/placeholder-bien.svg"
                  alt={`${bien.type} à ${bien.quartier} : ${bien.titre}`}
                  width="800"
                  height="450"
                  loading="lazy"
                />
                <div className={styles.propertyInfo}>
                  <div className={styles.propertyType}>{bien.type} • {bien.quartier}</div>
                  <h3 className={styles.propertyTitle}>{bien.titre}</h3>
                  <p className={styles.propertyDetails}>
                    {bien.surface} | {bien.chambres} chambres
                  </p>
                  <div className={styles.propertyPrice}>{bien.prix}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
