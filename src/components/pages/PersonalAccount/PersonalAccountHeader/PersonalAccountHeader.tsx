import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './PersonalAccountHeader.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';
import { ALL_ICONS } from '@constants/icons';

const PersonalAccountHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          {/* <div className="kek"></div> */}

          <div className={styles.Header}>
            <div className="animate__animated animate__fadeInLeft animate__delay">
              <div className={styles.Header_Title}>
                <BaseTitle color="#fff">
                  PERSONAL <br /> ACCOUNT
                </BaseTitle>
              </div>
            </div>

            <div className="animate__animated animate__fadeInLeft animate__delay-2s">
              <div className={styles.Header_Description}>
                <BaseText color="#fff">
                  The place&nbsp;
                  <span className={styles.Header_Description_Image}>
                    <Image
                      src="/images/icon/card-file-box.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                  &nbsp;where you can organize all your payments, transfers and
                  sport financials.
                </BaseText>
              </div>
            </div>

            <div className="animate__animated animate__zoomIn animate__zoomIn__new_style animate__delay-3s">
              <div className={styles.Header_Image}>
                <Image
                  src="/images/image/personal_account_image.png"
                  layout="fill"
                  alt={'Images'}
                  priority
                />
              </div>
            </div>

            <div className="animate__animated animate__fadeInLeft animate__delay-4s">
              <div className={styles.Header_Ps}>
                <BaseText color="#E1F665">
                  We want to make it profitable for you
                </BaseText>
              </div>
            </div>

            <div className="animate__animated animate__fadeInLeft animate__delay-5s">
              <div className={styles.Header_IconArrow}>
                <BaseIcon
                  viewBox="0 0 74 74"
                  icon={ALL_ICONS.ARROW_TO_ACTION}
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default PersonalAccountHeader;
