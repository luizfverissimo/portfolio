import Head from 'next/head';
import Image from 'next/image';
import Lottie from 'react-lottie';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from '../components/Modal';
import ProjectLeft from '../components/ProjectLeft';
import ProjectRight from '../components/ProjectRight';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';

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
      {/* <Modal/> */}

      <main className={styles.content}>
        <section className={styles.header} id='header'>
          <header className={styles.navBar}>
            <a>
              <Image
                src='/lf_verissimo_logo_light.svg'
                width='173'
                height='21'
                alt='LF Verissimo logo'
              />
            </a>
            <nav className={styles.navButtonsWrapper}>
              <a href='#projects-section'>Projects</a>
              <a href='#about'>About</a>
              <a href='#contact'>Contact</a>
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

          <a className={styles.projectsBtn} href='#projects-section'>
            <Lottie options={lottieOptionScrollDown} width={32} height={32} />
            <p>My Projects</p>
          </a>
        </section>
        <section className={styles.projects} id='projects-section'>
          <ProjectLeft
            backgroundColorStyle='blue'
            titleFirstLine='Offers'
            titleSecondLine='Aggregator'
            subTitle='FullStack Project'
            projectInfo='An Offers/Coupons aggregator build with full administration dashboard do manage the offers, users and affiliate links, created with Next.js and deployed at Vercel.'
            imgSrc='/offersfull.png'
            altImg='PrintScreen of Offers Aggregator'
            imgWidth={785}
            imgHeight={400}
            codeHref='https://github.com/luizfverissimo/offer-aggregator'
            onCLickOpenProject={() => {}}
            reactIcon
            nodeIcon
          />
          <ProjectRight
            backgroundColorStyle='violet'
            titleFirstLine='RPG Dice'
            titleSecondLine='Roller'
            subTitle='React Native Project'
            projectInfo='Application created to facilitate dice rolls in an RPG game, with the option of save rolls to speed the gameplay.'
            imgSrc='/dicefull.png'
            altImg='PrintScreen of RPG Dice Roller'
            imgWidth={598}
            imgHeight={400}
            codeHref='https://github.com/luizfverissimo/dice-roller'
            onCLickOpenProject={() => {}}
            reactIcon
            isApp
          />
          <ProjectLeft
            backgroundColorStyle='pink'
            titleFirstLine='Truco'
            titleSecondLine='Scoretracker'
            subTitle='React Native Project'
            projectInfo='A scoretracker for the Truco card game and the App keep the history of past matches.'
            imgSrc='/trucofull.png'
            altImg='PrintScreen of Truco Scoretracker'
            imgWidth={617}
            imgHeight={400}
            codeHref='https://github.com/luizfverissimo/placar-truco'
            onCLickOpenProject={() => {}}
            reactIcon
            isApp
          />
          <ProjectRight
            backgroundColorStyle='blue'
            titleFirstLine='Boardgame'
            titleSecondLine='Companion App'
            subTitle='React Native Project'
            projectInfo='An App Companion for the 221B Baker Street (Scotland Yard in pt-BR), the app facilitate the reading of the clues.'
            imgSrc='/scotlandfull.png'
            altImg='PrintScreen of Boardgame Companion App'
            imgWidth={615}
            imgHeight={400}
            codeHref='https://github.com/luizfverissimo/placar-truco'
            onCLickOpenProject={() => {}}
            reactIcon
            isApp
          />

          <ProjectLeft
            backgroundColorStyle='violet'
            titleFirstLine='RPG'
            titleSecondLine='Discord Chatbot'
            subTitle='Backend Project'
            projectInfo='Text-based RPG created in a ChatBot for Discord. Bot created using Node.js, the Discord.js library and Mongoose for database management.'
            imgSrc='/discordfull.png'
            altImg='PrintScreen of RPG Discord Chatbot'
            imgWidth={785}
            imgHeight={400}
            codeHref='https://github.com/luizfverissimo/RPGBotDiscordJS'
            onCLickOpenProject={() => {}}
            nodeIcon
            discordIcon
            databaseIcon
          />
          <a
            className={styles.projectsBtn}
            href='https://github.com/luizfverissimo?tab=repositories'
            target='_black'
          >
            <FontAwesomeIcon
              icon={faGithub}
              color='#fafafa'
              width={24}
              height={24}
              className={styles.buttonIcon}
            />
            <p>View all projects</p>
          </a>
        </section>

        <section className={styles.aboutMe} id='about'>
          <div className={styles.description}>
            <div className={styles.descriptionText}>
              <h2 className={styles.aboutMeTitle}>About me</h2>
              <p>
                I’m a self-taught fullstack developer, a geek developer
                exploring programming dungeons!
              </p>
              <div className={styles.likesButtonsContainer}>
                <Image
                  src='/dice-icon.svg'
                  width={52}
                  height={52}
                  className={styles.likesBtn}
                  title='RPG Master'
                  alt='RPG Master icon'
                />
                <Image
                  src='/sw-icon.svg'
                  width={52}
                  height={52}
                  className={styles.likesBtn}
                  title='Star Wars Fan'
                  alt='Star Wars Fan icon'
                />
                <Image
                  src='/game-icon.svg'
                  width={52}
                  height={52}
                  className={styles.likesBtn}
                  title='FPS Player'
                  alt='FPS Player icon'
                />
                <Image
                  src='/bg-icon.svg'
                  width={52}
                  height={52}
                  className={styles.likesBtn}
                  title='Boardgame Player and Collector'
                  alt='Boardgame Player and Collector icon'
                />
              </div>
            </div>
            <div className={styles.avatarContainer}>
              <Image
                src='/avatar.jpg'
                width={270}
                height={270}
                className={styles.avatarImage}
                title='LF Verissimo'
                alt='LF Verissimo photo'
              />
              <strong>Based in:</strong>
              <p> Londrina/PR - Brazil</p>
            </div>
          </div>
          <div className={styles.cardsContainer}>
            <Card
              imgSrc='/card-dragon.svg'
              imgWidth={83}
              imgHeight={83}
              altImg='FullStack Applications'
              cardTitle='FullStack Applications'
              cardText='Build full application to fulfil your goals.'
            />
            <Card
              imgSrc='/card-sword.svg'
              imgWidth={83}
              imgHeight={83}
              altImg='Web Design'
              cardTitle='Web Design'
              cardText='Make your brand standout in the web.'
            />
            <Card
              imgSrc='/card-quill.svg'
              imgWidth={83}
              imgHeight={83}
              altImg='Mobile Applications'
              cardTitle='Mobile Applications'
              cardText='Make your idea available on Android and iOS devices'
            />
          </div>
        </section>
        <section className={styles.contact} id='contact'>
          <h2>Contact</h2>
          <div className={styles.contactSocialLinks}>
            <a
              href='https://github.com/luizfverissimo'
              target='_black'
              className={styles.socialLinks}
            >
              <FontAwesomeIcon
                icon={faGithub}
                color='#9D0191'
                width={54}
                height={54}
                className={styles.socialIcons}
              />
              <p>/luizfverissimo</p>
            </a>
            <a
              href='https://www.linkedin.com/in/luiz-fernando-veríssimo-485323164/'
              target='_black'
              className={styles.socialLinks}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color='#9D0191'
                width={54}
                height={54}
                className={styles.socialIcons}
              />
              <p>/luizfverissimo</p>
            </a>
          </div>
          <ContactForm />
          <span className={styles.bgCircleSmall} />
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.logoSocialColumn}>
              <Image
                src='/lf_verissimo_logo_dark.svg'
                width={173}
                height={21}
              />
              <div className={styles.socialIconsContainer}>
                <a href='https://github.com/luizfverissimo' target='_black'>
                  <FontAwesomeIcon
                    icon={faGithub}
                    color='#fafafa'
                    width={24}
                    height={24}
                    className={styles.socialIcons}
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/luiz-fernando-veríssimo-485323164/'
                  target='_black'
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color='#fafafa'
                    width={24}
                    height={24}
                    className={styles.socialIcons}
                  />
                </a>
              </div>
              <p>Londrina/PR - Brazil</p>
            </div>
            <div className={styles.footerNavigation}>
              <a href='#header'>Back to top</a>
              <a href='#projects-section'>Projects</a>
              <a href='#about'>About me</a>
              <a href='#contact'>Contact</a>
            </div>
            <div className={styles.footerNavigation}>
              <a>Terms of use</a>
              <a>Privacy Police</a>
              <a>
                Resources used
                <br /> in this site
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
