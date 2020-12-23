import React from 'react';
import Image from 'next/image';

import styles from './card.module.scss';

function Card({cardTitle, cardText, imgSrc, imgWidth, imgHeight, altImg}) {
  return (
    <div className={styles.cardWrapper}>
      <Image src={imgSrc} width={imgWidth} height={imgHeight} alt={altImg} />
      <h3 className={styles.cardTitle}>{cardTitle}</h3>
      <p className={styles.cardText}>{cardText}</p>
    </div>
  );
}

export default Card;
