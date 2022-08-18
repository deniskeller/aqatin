import { BaseContainer } from '@base/index';
import React from 'react';
import styles from './Capabilities.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Capabilities = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Capabilities}>
            <div className={styles.Capabilities_Items}>
              <AnimationOnScroll
                animateIn="animate__fadeIn animate__delay"
                animateOnce
              >
                <div className={styles.Capabilities_Item}>
                  <div className={styles.Capabilities_Number}>
                    <div>01</div>
                  </div>
                  <div className={styles.Capabilities_Description}>
                    Open a free account in a couple of minutes
                  </div>
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__fadeIn animate__delay-1s"
                animateOnce
              >
                <div className={styles.Capabilities_Item}>
                  <div className={styles.Capabilities_Number}>
                    <div>02</div>
                  </div>
                  <div className={styles.Capabilities_Description}>
                    Control your finance by using the expense analytics
                  </div>
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__fadeIn animate__delay-2s"
                animateOnce
              >
                <div className={styles.Capabilities_Item}>
                  <div className={styles.Capabilities_Number}>
                    <div>03</div>
                  </div>
                  <div className={styles.Capabilities_Description}>
                    Set limits, get expense reports and keep track of weekly
                    analytics to control your spending
                  </div>
                </div>
              </AnimationOnScroll>
            </div>

            <div className={styles.Capabilities_Items}>
              <AnimationOnScroll
                animateIn="animate__fadeIn animate__delay-3s"
                animateOnce
              >
                <div className={styles.Capabilities_Item}>
                  <div className={styles.Capabilities_Number}>
                    <div>04</div>
                  </div>
                  <div className={styles.Capabilities_Description}>
                    Save the finances everyday with discounts and cashback using
                    your card
                  </div>
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__fadeIn animate__delay-4s"
                animateOnce
              >
                <div className={styles.Capabilities_Item}>
                  <div className={styles.Capabilities_Number}>
                    <div>05</div>
                  </div>
                  <div className={styles.Capabilities_Description}>
                    Transfer money all over the world instantly and without
                    hidden fees
                  </div>
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__fadeIn animate__delay-5s"
                animateOnce
              >
                <div className={styles.Capabilities_Item}>
                  <div className={styles.Capabilities_Number}>
                    <div>06</div>
                  </div>
                  <div className={styles.Capabilities_Description}>
                    Make your money work: get daily percentage on your funds
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

export default Capabilities;
