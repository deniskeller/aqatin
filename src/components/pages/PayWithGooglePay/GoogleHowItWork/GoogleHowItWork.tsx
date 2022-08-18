import { BaseContainer, BaseTitle } from '@base/index';
import React from 'react';
import styles from './GoogleHowItWork.module.scss';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const GoogleHowItWork = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.HowItWork}>
            <AnimationOnScroll
              animateIn="animate__fadeIn animate__delay"
              animateOnce
            >
              <div className={styles.HowItWork_Title}>
                <BaseTitle color="#fff" type="h2">
                  How does it work?
                </BaseTitle>
              </div>
            </AnimationOnScroll>

            <div className={styles.HowItWork_Instructions}>
              <AnimationOnScroll
                animateIn="animate__fadeIn animate__delay"
                animateOnce
              >
                <div className={styles.Instruction}>
                  <div className={styles.Instruction_Stage}>
                    <span>01</span>
                  </div>

                  <div className={styles.Instruction_Description}>
                    <p>
                      Download&nbsp;
                      <span className={styles.Instruction_Description_Icon}>
                        <Image
                          src="/images/icon/mobile-phone.png"
                          layout="fill"
                          alt={'Images'}
                        />
                      </span>
                      &nbsp;the Aqatin App and create an account
                    </p>
                  </div>
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__fadeIn animate__delay-2s"
                animateOnce
              >
                <div className={styles.Instruction}>
                  <div className={styles.Instruction_Stage}>
                    <span>02</span>
                  </div>

                  <div className={styles.Instruction_Description}>
                    <p>
                      Open the "Cards" tab, add your card&nbsp;
                      <span className={styles.Instruction_Description_Icon}>
                        <Image
                          src="/images/icon/credit-card.png"
                          layout="fill"
                          alt={'Images'}
                        />
                      </span>
                      &nbsp;to Google Pay and follow the simple instructions
                      below
                    </p>
                  </div>
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__fadeIn animate__delay-3s"
                animateOnce
              >
                <div className={styles.Instruction}>
                  <div className={styles.Instruction_Stage}>
                    <span>03</span>
                  </div>

                  <div className={styles.Instruction_Description}>
                    <p>
                      Use your e-wallet!&nbsp;
                      <span className={styles.Instruction_Description_Icon}>
                        <Image
                          src="/images/icon/purse.png"
                          layout="fill"
                          alt={'Images'}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default GoogleHowItWork;
