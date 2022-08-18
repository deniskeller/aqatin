import { BaseButton, BaseContainer, BaseText } from '@base/index';
import React from 'react';
import styles from './RemunerationPlanningJoin.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const RemunerationPlanningJoin = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Jion}>
            <AnimationOnScroll
              animateIn="animate__animated animate__fadeIn animate__delay"
              animateOnce
            >
              <div className={styles.Jion_Text}>
                <BaseText color="#E8E268">
                  Our specialists will help you to create a system of employee
                  certification so that the best people stay with you.
                </BaseText>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__animated animate__fadeIn animate__delay-1s"
              animateOnce
            >
              <BaseButton title="JOIN us" className={styles.Jion_Button} />
            </AnimationOnScroll>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default RemunerationPlanningJoin;
