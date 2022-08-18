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
                    Keep track of your payments, corporate cards and expenses
                    from one profile
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
                    Transfer and receive international payments without hidden
                    fees
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
                    Get the help with managing your business account
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
                    Use all your resources: you can issue cards physically or
                    virtually and track expenses online for the entire team
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
                    Control all processes without going anywhere and make a cool
                    business!
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
