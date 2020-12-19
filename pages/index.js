import Head from 'next/head';
import Image from 'next/image';
import Lottie from 'react-lottie';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/home.module.scss';
import animationData from '../public/lotties/lf30_editor_w6g77lum.json';

export default function Home() {
  const lottieOption = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <>
      <Head>
        <title>LF Verissimo | FullStack Developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.content}>
        <section className={styles.header}>
          <header className={styles.navBar}>
            <a>
              <Image
                src='/lf_verissimo_logo_light.svg'
                width='173'
                height='21'
              />
            </a>
            <nav className={styles.navButtonsWrapper}>
              <a>Home</a>
              <a>Projects</a>
              <a>About</a>
              <a>Contact</a>
            </nav>
          </header>
        </section>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>
                Hello!
                <br /> I’m LF Verissimo,
              </h1>
              <p>Solving problems through code.</p>
            </div>
            <div className={styles.heroImg}>
              <Lottie options={lottieOption} width={450} height={450} />
              <span className={styles.bgCircle} />
            </div>
          </div>

          <a className={styles.projectsBtn}>
            <FontAwesomeIcon
              icon={faAngleDoubleDown}
              color='#fafafa'
              width={24}
              height={24}
            />
            <p>My Projects</p>
          </a>
        </section>
        <section className={styles.projects}>
          <div className={styles.projectRow}>
            <h2>Offers Aggregator</h2>
          </div>
        </section>
      </main>
    </>
  );
}
