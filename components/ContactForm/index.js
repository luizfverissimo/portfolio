import React, { useEffect, useState, useRef } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Lottie from 'react-lottie';
import ReCAPTCHA from 'react-google-recaptcha';

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
  const [isVerified, setIsVerified] = useState(false);

  const spinner = useRef(null);

  useEffect(() => {
    init(`${process.env.NEXT_PUBLIC_EMAILJS_USER}`);
  }, []);

  const handleSubmitContactForm = async (event) => {
    event.preventDefault();
    if (!isVerified) {
      setStatus('Verify reCaptcha field.');
      return;
    }

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
      spinner.current.style.display = 'block';
      await emailjs.send('service_bsg0df3', 'template_xwi0imb', {
        from_name: name,
        from_email: email,
        message: message
      });

      spinner.current.style.display = 'none';

      setStatus('The message was sent, I will reply you soon!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.log(err);
      setStatus('An Error occurred, please resubmit.');
      spinner.current.style.display = 'none';
    }
  };

  const recaptchaVerify = () => {
    console.log('verificou');
    setIsVerified(true);
    return;
  };

  return (
    <form className={styles.contactForm}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='e-mail'>E-mail</label>
      <input
        type='text'
        name='e-mail'
        id='e-mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='message'>Message</label>
      <textarea
        name='message'
        id='message'
        className={styles.textAreaInput}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
        onChange={recaptchaVerify}
        theme='dark'
        hl='en'
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
