import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { Sticker } from '@content/index';
import React from 'react';
import styles from './OurServices.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const OurServices = () => {
  return (
    <>
      <BaseContainer>
        <div className={styles.OurServices}>
          <div className={styles.Header}>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <div className={styles.Title}>
                <BaseTitle color="#1B692C" type="h2">
                  OUR SERVICES
                </BaseTitle>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInRightBig">
              <div className={styles.Description}>
                <BaseText>
                  We focused on the sports industry for a reason. The fact is
                  that this area connects thousands of people with different
                  tasks, needs and financial capabilities. We made a decision to
                  pay attention to each and every client. That`s why you can
                  find different services on Aqatin platform:
                </BaseText>
              </div>
            </AnimationOnScroll>
          </div>

          <div className={styles.Stickers}>
            <AnimationOnScroll animateIn="animate__swing animate__delay-1s">
              <Sticker className={`${styles.Sticker} ${styles.Sticker1}`}>
                Customer account <br /> opening
              </Sticker>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__swing animate__delay-2s">
              <Sticker className={`${styles.Sticker} ${styles.Sticker2}`}>
                BUSINESS <br /> account opening
              </Sticker>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__swing animate__delay-3s">
              <Sticker className={`${styles.Sticker} ${styles.Sticker3}`}>
                Consumer <br /> payment cards
              </Sticker>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__swing animate__delay-4s">
              <Sticker className={`${styles.Sticker} ${styles.Sticker4}`}>
                Business payment <br /> cards
              </Sticker>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__swing animate__delay-5s">
              <Sticker className={`${styles.Sticker} ${styles.Sticker5}`}>
                E-wallet payments
              </Sticker>
            </AnimationOnScroll>
          </div>

          <div className={styles.Icon}>
            <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
          </div>
        </div>
      </BaseContainer>
    </>
  );
};

export default OurServices;
