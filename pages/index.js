import Head from 'next/head';
import Image from 'next/image';
import Lottie from 'react-lottie';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faReact,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/home.module.scss';
import programingAnimationData from '../public/lotties/programing.json';
import scrollDownAnimationData from '../public/lotties/arrow-down.json';

export default function Home() {
  const lottieOptionPrograming = {
    loop: true,
    autoplay: true,
    animationData: programingAnimationData
  };
  const lottieOptionScrollDown = {
    loop: true,
    autoplay: true,
    animationData: scrollDownAnimationData
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
              <Lottie
                options={lottieOptionPrograming}
                width={450}
                height={450}
              />
              <span className={styles.bgCircle} />
            </div>
          </div>

          <a className={styles.projectsBtn}>
            <Lottie options={lottieOptionScrollDown} width={32} height={32} />
            <p>My Projects</p>
          </a>
        </section>
        <section className={styles.projects}>
          <div className={styles.projectRow}>
            <div className={styles.rowLeft1}>
              <div className={styles.rowLeftText}>
                <h2 className={styles.projectTitle}>
                  Offers <br /> Aggregator
                </h2>
                <p className={styles.projectSubTitle}>FullStack Project</p>
                <p className={styles.projectInfo}>
                  An Offers/Coupons aggregator build with full administration
                  dashboard.
                </p>

                <div className={styles.techContainer}>
                  <p>Tech's:</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faReact}
                      width={32}
                      height={32}
                      className={styles.techIcon}
                    />
                    <FontAwesomeIcon
                      icon={faNodeJs}
                      width={32}
                      height={32}
                      className={styles.techIcon}
                    />
                  </div>
                </div>

                <div className={styles.buttonContainer}>
                  <button className={styles.projectButton}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      color='#fafafa'
                      width={24}
                      height={24}
                      className={styles.buttonIcon}
                    />
                    View the code
                  </button>
                  <button className={styles.projectButton}>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      color='#fafafa'
                      width={24}
                      height={24}
                      className={styles.buttonIcon}
                    />
                    Launch the site
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.rowRight1}>
              <div className={styles.imageWrapper}>
                <Image src='/offersfull.png' width={785} height={400} />
              </div>
            </div>
          </div>

          <div className={styles.projectRow}>
            <div className={styles.rowLeft2}>
              <div className={styles.imageWrapper}>
                <Image src='/dicefull.png' width={598} height={400} />
              </div>
            </div>
            <div className={styles.rowRight2}>
              <div className={styles.rowRightText}>
                <h2 className={styles.projectTitle}>
                  RPG Dice <br /> Roller
                </h2>
                <p className={styles.projectSubTitle}>React Native Project</p>
                <p className={styles.projectInfo}>
                  An Offers/Coupons aggregator build with full administration
                  dashboard.
                </p>

                <div className={styles.techContainer}>
                  <p>Tech's:</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faReact}
                      width={32}
                      height={32}
                      className={styles.techIcon}
                    />
                  </div>
                </div>

                <div className={styles.buttonContainer}>
                  <button className={styles.projectButton}>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      color='#fafafa'
                      width={24}
                      height={24}
                      className={styles.buttonIcon}
                    />
                    Launch the app
                  </button>
                  <button className={styles.projectButton}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      color='#fafafa'
                      width={24}
                      height={24}
                      className={styles.buttonIcon}
                    />
                    View the code
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.projectRow}>
            <div className={styles.rowLeft3}>
              <div className={styles.rowLeftText}>
                <h2 className={styles.projectTitle}>
                  Truco <br /> Scoreboard
                </h2>
                <p className={styles.projectSubTitle}>React Native Project</p>
                <p className={styles.projectInfo}>
                  An Offers/Coupons aggregator build with full administration
                  dashboard.
                </p>

                <div className={styles.techContainer}>
                  <p>Tech's:</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faReact}
                      width={32}
                      height={32}
                      className={styles.techIcon}
                    />
                  </div>
                </div>

                <div className={styles.buttonContainer}>
                  <button className={styles.projectButton}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      color='#fafafa'
                      width={24}
                      height={24}
                      className={styles.buttonIcon}
                    />
                    View the code
                  </button>
                  <button className={styles.projectButton}>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      color='#fafafa'
                      width={24}
                      height={24}
                      className={styles.buttonIcon}
                    />
                    Launch the app
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.rowRight3}>
              <div className={styles.imageWrapper}>
                <Image src='/trucofull.png' width={617} height={400} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
