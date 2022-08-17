import { BaseButton, BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';
import React from 'react';
import styles from './LoyaltyProgramsAbout.module.scss';

const LoyaltyProgramsAbout = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Overlay}></div>
        <BaseContainer>
          <div className={styles.About}>
            <div className={styles.About_Title}>
              <BaseText color="#E8E268">
                We provide the infrastructure that will quickly put your program
                into action.&nbsp;
                <span className={styles.About_Icon}>
                  <Image
                    src="/images/icon/rocket.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </span>
              </BaseText>
            </div>

            <div className={styles.About_Description}>
              <div className={styles.About_Description_Item}>
                <BaseText color="#fff">
                  Our experienced colleagues will help you solve all technical
                  issues, they will connect you to our cloud-based&nbsp;
                  <span className={styles.About_Icon}>
                    <Image
                      src="/images/icon/cloud.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                  &nbsp;platform for database safety.
                </BaseText>
                <br />
              </div>
              <div className={styles.About_Description_Item}>
                <BaseText color="#fff">
                  The information of our clients don't go through unprotected
                  Internet connection without encryption, it is treated
                  similarly to the information of Bank cards.
                </BaseText>
                <br />
                <BaseText color="#fff">Your system will work for you!</BaseText>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default LoyaltyProgramsAbout;
