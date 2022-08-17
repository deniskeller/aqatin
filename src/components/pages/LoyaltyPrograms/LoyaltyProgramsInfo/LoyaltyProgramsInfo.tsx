import { BaseButton, BaseContainer, BaseText } from '@base/index';
import React from 'react';
import styles from './LoyaltyProgramsInfo.module.scss';
import { Waypoint } from 'react-waypoint';

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
            <div className={styles.Info_Count}>
              <div className={styles.Info_Count_Value}>
                <span>{seconds}&nbsp;%</span>
              </div>
              <div className={styles.Info_Count_Description}>
                of consumers believe that community membership is an important
                part of their relationship with brands.
              </div>
            </div>

            <div className={styles.Info_Description}>
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
              <br />
              <BaseText color="#E8E268">
                With Aqatin you can do it quickly and comfortably!
              </BaseText>
              <br />

              <BaseButton title="JOIN us" className={styles.Button} />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default LoyaltyProgramsInfo;
