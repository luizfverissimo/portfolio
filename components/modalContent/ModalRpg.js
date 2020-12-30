import React from 'react';
import styles from '../../styles/modalContent.module.scss';

function ModalRpg() {
  return (
    <div className={styles.content}>
      <h4 className={styles.title}>RPG Discord Chatbot</h4>
      <p>Use the command <strong>!help</strong> to show a list of commands.</p>
      <p>The bot language is pt-BR, soon there will be an english version. </p>
      <a
        href='https://discord.com/invite/NyAHFFY'
        target='_black'
        className={styles.btn}
      >
        Visit the Discord Server with the bot running.
      </a>
    </div>
  );
}

export default ModalRpg;
