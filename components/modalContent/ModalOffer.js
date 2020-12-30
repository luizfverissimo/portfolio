import React from 'react';
import styles from '../../styles/modalContent.module.scss';

function ModalOffer() {
  return (
    <div className={styles.content}>
      <h4 className={styles.title}>Offers Aggregator</h4>
      <div className={styles.twoColumns}>
        <div className={styles.column}>
          <p>English Version</p>
          <div className={styles.twoRows}>
            <a
              href='https://offers-aggregator-git-internationalization.luizfverissimo.vercel.app'
              target='_black'
              className={styles.btn}
            >
              Visit site
            </a>
            <a
              href='https://offers-aggregator-git-internationalization.luizfverissimo.vercel.app/admin'
              target='_black'
              className={styles.btn}
            >
              Visit Admin Dashboard
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <p>Versão em Português</p>
          <div className={styles.twoRows}>
            <a
              href='https://offers-aggregator.vercel.app'
              target='_black'
              className={styles.btn}
            >
              Visite o site
            </a>
            <a
              href='https://offers-aggregator.vercel.app/admin'
              target='_black'
              className={styles.btn}
            >
              Visit o Painel de Administração
            </a>
          </div>
        </div>
      </div>
      <div>
          <strong>Admin Dashboard credentials:</strong>
          <p>User: user@test.com</p>
          <p>Password: 12345678</p>
        </div>
    </div>
  );
}

export default ModalOffer;
