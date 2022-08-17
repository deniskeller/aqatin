import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './AppleHeader.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';
import Marquee from 'react-fast-marquee';

const AppleHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className={styles.Header_Title}>
              <BaseTitle color="#000">
                PAY WITH <br /> APPLE PAY
              </BaseTitle>
            </div>

            <div className={styles.Header_Description}>
              <BaseText color="#000">
                Modern technology is happening now!&nbsp;
                <span className={styles.Header_Description_Icon}>
                  <Image
                    src="/images/icon/star-struck.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </span>
              </BaseText>
              <br />
              <BaseText color="#000">
                Add your Aqatin Card to Apple Pay and make the payments even
                easier!
              </BaseText>
              <br />
              <BaseText color="#000">
                Make quick purchases and pay for services quickly and safely
                with your iPhone or Apple iWatch.
              </BaseText>
            </div>

            <div className={styles.Header_Image}>
              <Image
                src="/images/image/pay_with_apple_pay_image.png"
                layout="fill"
                alt={'Images'}
              />
            </div>
          </div>
        </BaseContainer>

        <Marquee className={styles.Marquee} speed={150} gradient={false}>
          <span className="MarqueeText">
            APPLE PAY APPLE PAY APPLE PAY APPLE PAY&nbsp;APPLE PAY APPLE PAY
            APPLE PAY APPLE PAY&nbsp;
          </span>
        </Marquee>
      </div>
    </>
  );
};

export default AppleHeader;
