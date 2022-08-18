import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './GoogleHeader.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';
import Marquee from 'react-fast-marquee';

const GoogleHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className="animate__animated animate__fadeInLeft animate__delay">
              <div className={styles.Header_Title}>
                <BaseTitle color="#000">
                  PAY WITH <br /> google PAY
                </BaseTitle>
              </div>
            </div>

            <div className="animate__animated animate__fadeInLeft animate__delay-2s">
              <div className={styles.Header_Description}>
                <BaseText color="#000">
                  What arguments do we have?&nbsp;
                  <span className={styles.Header_Description_Icon}>
                    <Image
                      src="/images/icon/thinking-face.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                </BaseText>
                <br />
                <BaseText color="#000">
                  It is safe, fast and convenient!
                </BaseText>
                <br />
                <BaseText color="#000">
                  Just add the Aqatin card to your device and pay with one
                  touch. There are no payment amount limits and great number of
                  countries where you can use this service.
                </BaseText>
              </div>
            </div>

            <div className="animate__animated animate__fadeIn animate__delay-4s">
              <div className={styles.Header_Image}>
                <Image
                  src="/images/image/pay-with-googl-pay_image.png"
                  layout="fill"
                  alt={'Images'}
                />
              </div>
            </div>
          </div>
        </BaseContainer>

        <Marquee className={styles.Marquee} speed={150} gradient={false}>
          <span className="MarqueeText">
            GOOGLE PAY GOOGLE PAY GOOGLE PAY GOOGLE PAY&nbsp;GOOGLE PAY GOOGLE
            PAY GOOGLE PAY GOOGLE PAY&nbsp;
          </span>
        </Marquee>
      </div>
    </>
  );
};

export default GoogleHeader;
