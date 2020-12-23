import React, { useEffect, useState, useRef } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Lottie from 'react-lottie';

import styles from './contact.module.scss';
import spinnerAnimationData from '../../public/lotties/spinner.json';

const lottieOptionSpinner = {
  loop: true,
  autoplay: true,
  animationData: spinnerAnimationData
};

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const spinner = useRef(null)

  useEffect(() => {
    init(`${process.env.NEXT_PUBLIC_EMAILJS_USER}`);
  }, []);

  const handleSubmitContactForm = async (event) => {
    event.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setStatus('All fields are required.');
      return;
    }

    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    const emailLowerCase = email.toLocaleLowerCase();

    if (!regexEmail.test(emailLowerCase)) {
      setStatus('Enter a valid e-mail.');
      return;
    }

    try {
      spinner.current.style.display = "block"
      await emailjs.send('service_bsg0df3', 'template_xwi0imb', {
        from_name: name,
        from_email: email,
        message: message
      });

      spinner.current.style.display = "none"

      setStatus('The message was sent, I will reply you soon!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.log(err);
      setStatus('An Error occurred, please resubmit.');
      spinner.current.style.display = "none"
    }
  };

  return (
    <form className={styles.contactForm}>
      <legend htmlFor='name'>Name</legend>
      <input
        type='text'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <legend htmlFor='e-mail'>E-mail</legend>
      <input
        type='text'
        name='e-mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <legend htmlFor='message'>Message</legend>
      <textarea
        name='message'
        className={styles.textAreaInput}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className={styles.buttonContainer}>
        <p>{status}</p>
        <div ref={spinner} className={styles.spinner}>
          <Lottie options={lottieOptionSpinner} width={38} height={38} />
        </div>
        <button
          type='submit'
          onClick={(event) => handleSubmitContactForm(event)}
        >
          <FontAwesomeIcon
            icon={faPaperPlane}
            width={24}
            height={24}
            className={styles.iconSend}
          />
          Contact!
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
