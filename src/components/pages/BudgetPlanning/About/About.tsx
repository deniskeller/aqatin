import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';
import { BaseContainer, BaseIcon, BaseText } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Marquee from 'react-fast-marquee';

const About = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.About}>
            <BaseText color="#E8E268">Moreover</BaseText>
            <br className={styles.Br} />
            <div className={styles.About_Description}>
              <div className={styles.About_Description_Left}>
                <BaseText color="#fff">
                  this feature will allow you to track&nbsp;
                  <span className={styles.About_Description_Icon}>
                    <Image
                      src="/images/icon/detective.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                  &nbsp;your financial situation in real time and remind you
                  when the deadline is approaching.
                </BaseText>

                <div className={styles.About_Description_IconStar}>
                  <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
                </div>
              </div>

              <div className={styles.About_Description_Right}>
                <BaseText color="#fff">
                  We understand that it takes a long time to work with finances,
                  that's why&nbsp;<span>we are ready to take on this job.</span>
                  &nbsp;
                  <span className={styles.About_Description_Icon}>
                    <Image
                      src="/images/icon/smiling-face-with-sunglasses.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                </BaseText>
                <br />
                <BaseText color="#fff">
                  Aqatin's budget planner will help you work up a&nbsp;
                  <span>savings goal and calculate your daily expenses</span>
                  &nbsp;for that.
                </BaseText>
              </div>
            </div>
          </div>
        </BaseContainer>
        <Marquee className={styles.Marquee} speed={150} gradient={false}>
          <span className="MarqueeText MarqueeText_BudgetPlanningPage">
            PLAN YOUR BUDGET PLAN YOUR BUDGET PLAN YOUR BUDGET PLAN YOUR BUDGET
            PLAN YOUR BUDGET PLAN YOUR BUDGET
          </span>
        </Marquee>
      </div>
    </>
  );
};

export default About;
