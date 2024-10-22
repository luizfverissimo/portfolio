import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Lottie from 'react-lottie';
import { faGithub, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'nuka-carousel';

import Modal from '../components/Modal';
import ProjectLeft from '../components/ProjectLeft';
import ProjectRight from '../components/ProjectRight';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import ModalOffer from '../components/modalContent/ModalOffer';
import ModalRpg from '../components/modalContent/ModalRpg';
import ModalResources from '../components/modalContent/ModalResources';
import ModalDice from '../components/modalContent/ModalDice';
import ModalTruco from '../components/modalContent/ModalTruco';

import styles from '../styles/home.module.scss';
import programingAnimationData from '../public/lotties/programing.json';
import scrollDownAnimationData from '../public/lotties/arrow-down.json';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOffer, setIsOffer] = useState(false);
  const [isDice, setIsDice] = useState(false);
  const [isTruco, setIsTruco] = useState(false);
  const [isBoard, setIsBoard] = useState(false);
  const [isRpg, setIsRpg] = useState(false);
  const [isResources, setIsResources] = useState(false);

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

  const closeModal = () => {
    setIsOpen(false);
    setIsOffer(false);
    setIsDice(false);
    setIsTruco(false);
    setIsBoard(false);
    setIsRpg(false);
    setIsResources(false);
  };

  const openProject = (project) => {
    setIsOpen(true);
    if (project === 'offer') setIsOffer(true);
    if (project === 'dice') setIsDice(true);
    if (project === 'truco') setIsTruco(true);
    if (project === 'board') setIsBoard(true);
    if (project === 'rpg') setIsRpg(true);
    if (project === 'resources') setIsResources(true);
  };

  return (
    <>
      <Head>
        <title>LF Verissimo | FullStack Developer</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='LF Verissimo personal portfolio, fullstack developer, solving problems through code.'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta name='twitter:card' value='summary'></meta>
        <meta
          name='twitter:image'
          content='http://lfverissimo.com/twittermeta.png'
        ></meta>

        <meta
          property='og:title'
          content='LF Verissimo Portfolio | FullStack Developer'
        />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='http://lfverissimo.com/' />
        <meta
          property='og:image'
          content='http://lfverissimo.com/twittermeta.png'
        />
        <meta
          property='og:description'
          content='LF Verissimo personal portfolio, fullstack developer, solving problems through code.'
        />
      </Head>
      {isOpen && (
        <Modal onCLickCloseModal={closeModal}>
          {isOffer && <ModalOffer />}
          {isDice && <ModalDice />}
          {isTruco && <ModalTruco />}
          {isBoard && <h1>Is Board</h1>}
          {isRpg && <ModalRpg />}
          {isResources && <ModalResources />}
        </Modal>
      )}

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
            <div className={styles.heroImgMobile}>
              <Lottie
                options={lottieOptionPrograming}
                width={350}
                height={350}
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
            onCLickOpenProject={() => openProject('offer')}
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
            onCLickOpenProject={() => openProject('dice')}
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
            onCLickOpenProject={() => openProject('truco')}
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
            onCLickOpenProject={() => openProject('board')}
            reactIcon
            isApp
          />

          <ProjectLeft
            backgroundColorStyle='violet'
            titleFirstLine='RPG'
            titleSecondLine='Discord Chatbot'
            subTitle='Backend Project'
            projectInfo='Text-based RPG game created in a ChatBot for Discord. Bot created using Node.js, the Discord.js library and Mongoose for database management.'
            imgSrc='/discordfull.png'
            altImg='PrintScreen of RPG Discord Chatbot'
            imgWidth={785}
            imgHeight={400}
            codeHref='https://github.com/luizfverissimo/RPGBotDiscordJS'
            onCLickOpenProject={() => openProject('rpg')}
            nodeIcon
            discordIcon
            databaseIcon
          />
          <a
            className={styles.projectsBtn}
            href='https://github.com/luizfverissimo?tab=repositories'
            target='_black'
            rel='noopener'
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
                I’m a self-taught fullstack JavaScript developer, a geek
                developer exploring programming dungeons!
              </p>
              <div className={styles.likesButtonsContainer}>
                <div className={styles.imageContainer}>
                  <Image
                    src='/dice-icon.svg'
                    width={52}
                    height={52}
                    className={styles.likesBtn}
                    title='RPG Master'
                    alt='RPG Master icon'
                  />
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src='/sw-icon.svg'
                    width={52}
                    height={52}
                    className={styles.likesBtn}
                    title='Star Wars Fan'
                    alt='Star Wars Fan icon'
                  />
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src='/game-icon.svg'
                    width={52}
                    height={52}
                    className={styles.likesBtn}
                    title='FPS Player'
                    alt='FPS Player icon'
                  />
                </div>
                <div className={styles.imageContainer}>
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
        <div className={styles.mobileCarousel}>
          <Carousel
            defaultControlsConfig={{
              nextButtonStyle: {
                display: 'none'
              },
              prevButtonStyle: {
                display: 'none'
              },
              pagingDotsStyle: {
                display: 'none'
              }
            }}
            cellAlign='left'
            cellSpacing={30}
            slideWidth='300px'
            disableEdgeSwiping={true}
            transitionMode='scroll'
            // opacityScale={0.3}
          >
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
          </Carousel>
        </div>
        <section className={styles.contact} id='contact'>
          <h2>Contact</h2>
          <div className={styles.contactSocialLinks}>
            <a
              href='https://github.com/luizfverissimo'
              target='_black'
              rel='noopener'
              className={styles.socialLinks}
            >
              <FontAwesomeIcon
                icon={faGithub}
                color='#9D0191'
                width={36}
                height={36}
                className={styles.socialIcons}
              />
              <p>/luizfverissimo</p>
            </a>
            <a
              href='https://www.linkedin.com/in/luiz-fernando-veríssimo-485323164/'
              target='_black'
              rel='noopener'
              className={styles.socialLinks}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color='#9D0191'
                width={36}
                height={36}
                className={styles.socialIcons}
              />
              <p>/luizfverissimo</p>
            </a>

            <a
              href='https://play.google.com/store/apps/developer?id=LF+Verissimo'
              target='_black'
              rel='noopener'
              className={styles.socialLinks}
            >
              <FontAwesomeIcon
                icon={faGooglePlay}
                color='#9D0191'
                width={36}
                height={36}
                className={styles.socialIcons}
              />
              <p>/LF Verissimo</p>
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
                alt='LF Verissimo logo'
              />
              <div className={styles.socialIconsContainer}>
                <a
                  href='https://github.com/luizfverissimo'
                  target='_black'
                  rel='noopener'
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color='#fafafa'
                    width={24}
                    height={24}
                    className={styles.socialIcons}
                    title='LF Verissimo Github'
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/luiz-fernando-veríssimo-485323164/'
                  target='_black'
                  rel='noopener'
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color='#fafafa'
                    width={24}
                    height={24}
                    className={styles.socialIcons}
                    title='LF Verissimo Linkedin'
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
              <a
                href='https://www.privacypolicies.com/live/8d2198f3-da49-45d2-b9f8-0ead02c57152'
                target='_black'
                rel='noopener'
              >
                Terms and Conditions
              </a>
              <a
                href='https://www.privacypolicies.com/live/28fc87f4-e550-4837-8bcb-df82abbc62fd'
                target='_black'
                rel='noopener'
              >
                Privacy Police
              </a>
              <a onClick={() => openProject('resources')}>
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
