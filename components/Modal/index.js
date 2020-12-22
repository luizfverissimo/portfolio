import React from 'react'

import styles from './modal.module.scss'

function Modal({children}) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <button className={styles.closeModalBtn}>X</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
