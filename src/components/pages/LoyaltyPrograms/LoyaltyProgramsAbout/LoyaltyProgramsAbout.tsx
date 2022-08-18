import { BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';
import React from 'react';
import styles from './LoyaltyProgramsAbout.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const LoyaltyProgramsAbout = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Overlay}></div>
        <BaseContainer>
          <div className={styles.About}>
            <AnimationOnScroll
              animateIn="animate__fadeIn animate__delay"
              animateOnce
            >
              <div className={styles.About_Title}>
                <BaseText color="#E8E268">
                  We provide the infrastructure that will quickly put your
                  program into action.&nbsp;
                  <span className={styles.About_Icon}>
                    <Image
                      src="/images/icon/rocket.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                </BaseText>
              </div>
            </AnimationOnScroll>

            <div className={styles.About_Description}>
              <AnimationOnScroll
                animateIn="animate__animated animate__fadeInLeftBig"
                animateOnce
              >
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
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__animated animate__fadeInRightBig"
                animateOnce
              >
                <div className={styles.About_Description_Item}>
                  <BaseText color="#fff">
                    The information of our clients don't go through unprotected
                    Internet connection without encryption, it is treated
                    similarly to the information of Bank cards.
                  </BaseText>
                  <br />
                  <BaseText color="#fff">
                    Your system will work for you!
                  </BaseText>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default LoyaltyProgramsAbout;
