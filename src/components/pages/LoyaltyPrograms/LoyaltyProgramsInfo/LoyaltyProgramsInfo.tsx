import { BaseButton, BaseContainer, BaseText } from '@base/index';
import React from 'react';
import styles from './LoyaltyProgramsInfo.module.scss';
import { Waypoint } from 'react-waypoint';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const LoyaltyProgramsInfo = () => {
  const [seconds, setSeconds] = React.useState(0);
  const [timerActive, setTimerActive] = React.useState(false);

  React.useEffect(() => {
    if (seconds < 71 && timerActive) {
      setTimeout(setSeconds, 10, seconds + 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Info}>
            <AnimationOnScroll
              animateIn="animate__animated animate__fadeInLeftBig"
              animateOnce
            >
              <div className={styles.Info_Count}>
                <div className={styles.Info_Count_Value}>
                  <span>{seconds}&nbsp;%</span>
                </div>
                <div className={styles.Info_Count_Description}>
                  of consumers believe that community membership is an important
                  part of their relationship with brands.
                </div>
              </div>
            </AnimationOnScroll>

            <div className={styles.Info_Description}>
              <AnimationOnScroll
                animateIn="animate__animated animate__fadeInRightBig animate__delay-1s"
                animateOnce
              >
                <Waypoint
                  onEnter={() => setTimerActive(true)}
                  onLeave={() => setTimerActive(false)}
                >
                  <div>
                    <BaseText color="#fff">
                      And still many companies just ignore this development way
                      because of implementation difficulties and the need for
                      infrastructure
                    </BaseText>
                  </div>
                </Waypoint>
              </AnimationOnScroll>
              <br />

              <AnimationOnScroll
                animateIn="animate__animated animate__fadeInRightBig animate__delay-2s"
                animateOnce
              >
                <BaseText color="#E8E268">
                  With Aqatin you can do it quickly and comfortably!
                </BaseText>
              </AnimationOnScroll>
              <br />

              <AnimationOnScroll
                animateIn="animate__animated animate__fadeInRightBig animate__delay-3s"
                animateOnce
              >
                <BaseButton title="JOIN us" className={styles.Button} />
              </AnimationOnScroll>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default LoyaltyProgramsInfo;
