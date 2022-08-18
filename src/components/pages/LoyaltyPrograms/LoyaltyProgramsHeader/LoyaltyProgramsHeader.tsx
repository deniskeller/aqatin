import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './LoyaltyProgramsHeader.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';
import { ALL_ICONS } from '@constants/icons';

const LoyaltyProgramsHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className="animate__animated animate__fadeInLeft animate__delay">
              <div className={styles.Header_Title}>
                <BaseTitle color="#000">
                  LOYALTY <br /> PROGRAMS
                </BaseTitle>
              </div>
            </div>

            <div className="animate__animated animate__fadeInLeft animate__delay-2s">
              <div className={styles.Header_Description}>
                <BaseText color="#000">
                  Keep your clients interested in your company, encourage them,
                  form a loyal community and get a stable income!&nbsp;
                  <span className={styles.Header_Description_Icon}>
                    <Image
                      src="/images/icon/chart-increasing.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                </BaseText>
                <br />

                <BaseText color="#000">
                  Together with Aqatin your loyalty program will quickly appear
                  on the market!
                </BaseText>
                <br />

                <BaseText color="#000">
                  The loyalty program is a reliable source of income which will
                  keep business with loyal&nbsp;
                  <span className={styles.Header_Description_Icon}>
                    <Image
                      src="/images/icon/yellow-heart.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                  &nbsp;clients.
                </BaseText>
              </div>
            </div>

            <div className="animate__animated animate__zoomIn animate__zoomIn__new_style animate__delay-3s">
              <div className={styles.Header_Image}>
                <Image
                  src="/images/image/loyalty_image.png"
                  layout="fill"
                  alt={'Images'}
                  priority
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default LoyaltyProgramsHeader;
