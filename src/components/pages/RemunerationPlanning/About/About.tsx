import { BaseContainer, BaseIcon, BaseText } from '@base/index';
import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';
import { Sticker } from '@content/index';

const About = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.About}>
            <div className={styles.About_TextContent}>
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

              <br className={styles.Br} />

              <div className={styles.About_Description}>
                <BaseText color="#fff">
                  We can tell you how to provide such conditions
                </BaseText>

                <br />

                <BaseText color="#fff">
                  And also give advice on the following issues:
                </BaseText>
              </div>

              <div className={styles.About_IconStasr}>
                <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
              </div>
            </div>

            <div className={styles.About_StickersContent}>
              <div className={`${styles.Stickers} ${styles.Stickers1}`}>
                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker1}`}
                  color="#000000"
                  background="#E1F665"
                >
                  taxes fees
                </Sticker>

                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker2}`}
                  color="#000000"
                  background="#E1F665"
                >
                  incentive payments
                </Sticker>
              </div>

              <div className={`${styles.Stickers} ${styles.Stickers2}`}>
                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker1}`}
                  color="#000000"
                  background="#E1F665"
                >
                  special condition in <br /> form of as service car
                </Sticker>

                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker2}`}
                  color="#000000"
                  background="#E1F665"
                >
                  vouchers for <br /> child care
                </Sticker>

                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker3}`}
                  color="#000000"
                  background="#E1F665"
                >
                  non financial <br /> incentives
                </Sticker>
              </div>

              <div className={`${styles.Stickers} ${styles.Stickers3}`}>
                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker1}`}
                  color="#000000"
                  background="#E1F665"
                >
                  tax treatment for employees <br /> working from home
                </Sticker>

                <Sticker
                  className={`${styles.Sticker} ${styles.Sticker2}`}
                  color="#000000"
                  background="#E1F665"
                >
                  hiring financial employees <br /> and remuneration
                </Sticker>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default About;
