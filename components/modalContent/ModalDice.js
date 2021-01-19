import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

import styles from '../../styles/modalContent.module.scss';

function ModalDice() {
  return (
    <div className={styles.content}>
      <h4 className={styles.title}>Fire Dice Roller</h4>
      <p>The application is in pt-BR, will be translate to English soon.</p>
      <a
        href='https://play.google.com/store/apps/details?id=com.lfverissimo.firediceroller'
        target='_black'
        rel='noopener'
        className={styles.btn}
      >
        <FontAwesomeIcon
          icon={faGooglePlay}
          color='#fafafa'
          width={24}
          height={24}
          style={{ marginRight: '10px' }}
        />
        Google Play
      </a>
    </div>
  );
}

export default ModalDice;
