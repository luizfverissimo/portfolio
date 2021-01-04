import React from 'react';
import styles from '../../styles/modalContent.module.scss';

function ModalResources() {
  return (
    <div className={styles.content}>
      <h4 className={styles.title}>Resources used in this site</h4>
      <p>
        <strong>Noun Project icons</strong>
      </p>
      <a
        href='https://thenounproject.com/search/?q=dragon&i=3048454'
        target='_blank'
        rel='noopener'
      >
        Dragon icon by Eucalyp
      </a>
      <a
        href='https://thenounproject.com/term/crest/3048450/'
        target='_blank'
        rel='noopener'
      >
        Crest icon by Eucalyp
      </a>
      <a
        href='https://thenounproject.com/term/scroll-ink/3048464/'
        target='_blank'
        rel='noopener'
      >
        Scroll ink icon by Eucalyp
      </a>
      <a
        href='https://thenounproject.com/search/?q=meeple&i=1269'
        target='_blank'
        rel='noopener'
      >
        Meeple icon by Johan H. W. Basberg, GB
      </a>
      <a
        href='https://thenounproject.com/search/?q=vader&i=65913'
        target='_blank'
        rel='noopener'
      >
        Darth Vader icon by Rohith M S, IN
      </a>
    </div>
  );
}

export default ModalResources;
