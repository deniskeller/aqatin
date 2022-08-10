import { BaseContainer, BaseIcon, BaseText } from '@base/index';
import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';

const About = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.About}>
            <div className={styles.About_Description}>
              <BaseText color="#fff">
                Our international financial partners help us with this task, so
                we do a great job together. Your money is in the accounts of
                Aqatin global partners. This protects you additionally from
                hypothetical internal problems of our company.
              </BaseText>
            </div>
          </div>

          <div className={styles.About_IconStar}>
            <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
          </div>
        </BaseContainer>
        <div className={styles.About_Shape}>
          <div className={styles.Text}>
            <p>
              Your accounts and cards are&nbsp;
              <span>protected from fraud, loss and theft</span>, according to
              the provisions identical to Visa or MasterCard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
