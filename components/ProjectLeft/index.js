import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  faExternalLinkAlt,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faReact,
  faNodeJs,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './projectLeft.module.scss';

function ProjectLeft({
  titleFirstLine,
  titleSecondLine,
  subTitle,
  projectInfo,
  imgSrc,
  imgWidth,
  imgHeight,
  codeHref,
  onCLickOpenProject,
  isApp,
  reactIcon,
  nodeIcon,
  discordIcon,
  databaseIcon,
  backgroundColorStyle
}) {
  const [backgroundColor, setBackgroundColor] = useState(null)
  useEffect(() => {
    switch (backgroundColorStyle) {
      case 'blue':
        setBackgroundColor(styles.rowLeftBlue)
        break;
      case 'violet':
        setBackgroundColor(styles.rowLeftViolet)
        break;
      case 'pink':
        setBackgroundColor(styles.rowLeftPink)
    }
  }, []);

  return (
    <div>
      <div className={styles.projectRow}>
        <div className={backgroundColor}>
          <div className={styles.rowLeftText}>
            <h2 className={styles.projectTitle}>
              {titleFirstLine} <br /> {titleSecondLine}
            </h2>
            <p className={styles.projectSubTitle}>{subTitle}</p>
            <p className={styles.projectInfo}>{projectInfo}</p>

            <div className={styles.techContainer}>
              <p>Tech's:</p>
              <div>
                {reactIcon && (
                  <FontAwesomeIcon
                    icon={faReact}
                    width={32}
                    height={32}
                    className={styles.techIcon}
                    title='React'
                  />
                )}
                {nodeIcon && (
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    width={32}
                    height={32}
                    className={styles.techIcon}
                    title='Node.js'
                  />
                )}
                {discordIcon && (
                  <FontAwesomeIcon
                    icon={faDiscord}
                    width={32}
                    height={32}
                    className={styles.techIcon}
                    title='Discord.js'
                  />
                )}
                {databaseIcon && (
                  <FontAwesomeIcon
                    icon={faDatabase}
                    width={32}
                    height={32}
                    className={styles.techIcon}
                    title='MongoDB'
                  />
                )}
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <a href={codeHref} className={styles.projectButton}>
                <FontAwesomeIcon
                  icon={faGithub}
                  color='#fafafa'
                  width={24}
                  height={24}
                  className={styles.buttonIcon}
                />
                View the code
              </a>
              <button
                onClick={onCLickOpenProject}
                className={styles.projectButton}
              >
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  color='#fafafa'
                  width={24}
                  height={24}
                  className={styles.buttonIcon}
                />
                Launch the {isApp ? 'app' : 'site'}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rowRight}>
          <div className={styles.imageWrapper}>
            <Image src={imgSrc} width={imgWidth} height={imgHeight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectLeft;
