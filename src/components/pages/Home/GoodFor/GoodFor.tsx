import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './GoodFor.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Sticker } from '@content/index';

const GoodFor = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.GoodFor}>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
              <div className={styles.Description}>
                <BaseText>
                  We make the process of collecting money and monitoring the
                  procedures during the championships and other sport events
                  much easier.
                </BaseText>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
              <div className={styles.Title}>
                <BaseTitle color="#1B692C" type="h2">
                  GOOD FOR
                </BaseTitle>
              </div>
            </AnimationOnScroll>

            <div className={`${styles.Stickers} ${styles.Stickers1}`}>
              <AnimationOnScroll animateIn="animate__swing" animateOnce>
                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker1}`}
                  color="#e1f665"
                  background="#1b692c"
                >
                  ATHLetes from the uk
                </Sticker>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__swing animate__delay-1s"
                animateOnce
              >
                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker2}`}
                  color="#e1f665"
                  background="#1b692c"
                >
                  sport managers
                </Sticker>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__swing animate__delay-2s"
                animateOnce
              >
                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker3}`}
                  color="#e1f665"
                  background="#1b692c"
                >
                  advertisers
                </Sticker>
              </AnimationOnScroll>
            </div>

            <div className={`${styles.Stickers} ${styles.Stickers2}`}>
              <AnimationOnScroll
                animateIn="animate__swing animate__delay-3s"
                animateOnce
              >
                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker1}`}
                  color="#e1f665"
                  background="#1b692c"
                >
                  sport centres
                </Sticker>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__swing animate__delay-4s"
                animateOnce
              >
                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker2}`}
                  color="#e1f665"
                  background="#1b692c"
                >
                  sport arenas
                </Sticker>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__swing animate__delay-5s"
                animateOnce
              >
                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker3}`}
                  color="#e1f665"
                  background="#1b692c"
                >
                  ticket sale companies
                </Sticker>
              </AnimationOnScroll>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default GoodFor;
