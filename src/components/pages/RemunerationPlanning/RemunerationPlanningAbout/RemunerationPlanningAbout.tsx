import { BaseContainer, BaseIcon, BaseText } from '@base/index';
import React from 'react';
import styles from './RemunerationPlanningAbout.module.scss';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';
import { Sticker } from '@content/index';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const RemunerationPlanningAbout = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.About}>
            <div className={styles.About_TextContent}>
              <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce>
                <div className={styles.About_Description}>
                  <BaseText color="#fff">
                    What else works apart from the amount of salary?&nbsp;
                    <span>A competitive remuneration package!</span>&nbsp;
                    <span className={styles.About_Description_Icon}>
                      <Image
                        src="/images/icon/person-running.png"
                        layout="fill"
                        alt={'Images'}
                      />
                    </span>
                    Guaranteed career growth and security within your company -
                    this is what will provide you with a reliable team.
                  </BaseText>
                </div>
              </AnimationOnScroll>

              <br className={styles.Br} />

              <AnimationOnScroll
                animateIn="animate__fadeInRightBig"
                animateOnce
              >
                <div className={styles.About_Description}>
                  <BaseText color="#fff">
                    We can tell you how to provide such conditions
                  </BaseText>

                  <br />

                  <BaseText color="#fff">
                    And also give advice on the following issues:
                  </BaseText>
                </div>
              </AnimationOnScroll>

              <div className={styles.About_IconStasr}>
                <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
              </div>
            </div>

            <div className={styles.About_StickersContent}>
              <div className={`${styles.Stickers} ${styles.Stickers1}`}>
                <AnimationOnScroll
                  animateIn="animate__swing animate__delay animate__swing__sticker"
                  animateOnce
                >
                  <Sticker
                    className={`${styles.Sticker} ${styles.Sticker1}`}
                    color="#000000"
                    background="#E1F665"
                  >
                    taxes fees
                  </Sticker>
                </AnimationOnScroll>

                <AnimationOnScroll
                  animateIn="animate__swing animate__swing__sticker animate__delay-1s"
                  animateOnce
                >
                  <Sticker
                    className={`${styles.Sticker} ${styles.Sticker2}`}
                    color="#000000"
                    background="#E1F665"
                  >
                    incentive payments
                  </Sticker>
                </AnimationOnScroll>
              </div>

              <div className={`${styles.Stickers} ${styles.Stickers2}`}>
                <AnimationOnScroll
                  animateIn="animate__swing animate__swing__sticker animate__delay-2s"
                  animateOnce
                >
                  <Sticker
                    className={`${styles.Sticker} ${styles.Sticker1}`}
                    color="#000000"
                    background="#E1F665"
                  >
                    special condition in <br /> form of as service car
                  </Sticker>
                </AnimationOnScroll>

                <AnimationOnScroll
                  animateIn="animate__swing animate__swing__sticker animate__delay-3s"
                  animateOnce
                >
                  <Sticker
                    className={`${styles.Sticker} ${styles.Sticker2}`}
                    color="#000000"
                    background="#E1F665"
                  >
                    vouchers for <br /> child care
                  </Sticker>
                </AnimationOnScroll>

                <AnimationOnScroll
                  animateIn="animate__swing animate__swing__sticker animate__delay-4s"
                  animateOnce
                >
                  <Sticker
                    className={`${styles.Sticker} ${styles.Sticker3}`}
                    color="#000000"
                    background="#E1F665"
                  >
                    non financial <br /> incentives
                  </Sticker>
                </AnimationOnScroll>
              </div>

              <div className={`${styles.Stickers} ${styles.Stickers3}`}>
                <AnimationOnScroll
                  animateIn="animate__swing animate__swing__sticker animate__delay-5s"
                  animateOnce
                >
                  <Sticker
                    className={`${styles.Sticker} ${styles.Sticker1}`}
                    color="#000000"
                    background="#E1F665"
                  >
                    tax treatment for employees <br /> working from home
                  </Sticker>
                </AnimationOnScroll>

                <AnimationOnScroll
                  animateIn="animate__swing animate__delay-3s animate__swing__sticker RemunerationPlanningAbout__animate__delay"
                  animateOnce
                >
                  <Sticker
                    className={`${styles.Sticker} ${styles.Sticker2}`}
                    color="#000000"
                    background="#E1F665"
                  >
                    hiring financial employees <br /> and remuneration
                  </Sticker>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default RemunerationPlanningAbout;
