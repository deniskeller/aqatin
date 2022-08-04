import { BaseContainer, BaseText } from '@base/index';
import React from 'react';
import styles from './AboutProfile.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const AboutProfile = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.AboutProfile}>
            <div className={styles.AboutProfile_Items}>
              <div className={styles.Item}>
                <AnimationOnScroll
                  animateIn="animate__fadeInLeft"
                  //  animateOnce
                >
                  <div className={styles.Item_Number}>
                    <span>01</span>
                  </div>
                  <div className={styles.Item_Name}>
                    <BaseText color="#1b692c">PERSONAL</BaseText>
                  </div>
                  <div className={styles.Item_Description}>
                    <BaseText>
                      for athletes, for private transactions and for budget
                      control
                    </BaseText>
                  </div>
                </AnimationOnScroll>
              </div>

              <div className={styles.Item}>
                <AnimationOnScroll
                  animateIn="animate__fadeInLeft animate__delay-2s"
                  // animateOnce
                >
                  <div className={styles.Item_Number}>
                    <span>02</span>
                  </div>
                  <div className={styles.Item_Name}>
                    <BaseText color="#1b692c">BUSINESS</BaseText>
                  </div>
                  <div className={styles.Item_Description}>
                    <BaseText>
                      for sport agents, sport arenas and advertisers
                    </BaseText>
                  </div>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </BaseContainer>
        <AnimationOnScroll
          animateIn="animate__fadeInRight animate__delay-4s"
          // animateOnce
        >
          <div className={styles.AboutProfile_Description}>
            <p>
              This system consists of all your money transactions in one place.
            </p>
          </div>
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default AboutProfile;
