import { BaseContainer } from '@base/index';
import React from 'react';
import styles from './Benefits.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Benefits = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Benefits}>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <div className={styles.Benefits_Item}>
                <div className={styles.Number}>
                  <span>01</span>
                </div>
                <div className={styles.Description}>
                  <span>
                    Customer <br /> account <br /> opening
                  </span>
                </div>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn animate__delay">
              <div className={styles.Benefits_Item}>
                <div className={styles.Number}>
                  <span>02</span>
                </div>
                <div className={styles.Description}>
                  <span>
                    BUSINESS <br /> account opening
                  </span>
                </div>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn animate__delay">
              <div
                className={`${styles.Benefits_Item} ${styles.Benefits_Item3}`}
              >
                <div className={styles.Number}>
                  <span>03</span>
                </div>
                <div className={styles.Description}>
                  <span>
                    Consumer <br /> payment cards
                  </span>
                </div>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn">
              {' '}
              <div className={styles.Benefits_Item}>
                <div className={styles.Number}>
                  <span>04</span>
                </div>
                <div className={styles.Description}>
                  <span>
                    Business <br /> payment cards
                  </span>
                </div>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn">
              <div className={styles.Benefits_Item}>
                <div className={styles.Number}>
                  <span>05</span>
                </div>
                <div className={styles.Description}>
                  <span>
                    E-wallet <br /> payments
                  </span>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Benefits;
