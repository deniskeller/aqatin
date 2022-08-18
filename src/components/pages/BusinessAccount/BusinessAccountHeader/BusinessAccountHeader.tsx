import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './BusinessAccountHeader.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';
import { ALL_ICONS } from '@constants/icons';

const BusinessAccountHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className={styles.Header_Title}>
              <BaseTitle color="#fff">
                BUSINESS <br /> ACCOUNT
              </BaseTitle>
            </div>

            <div className={styles.Header_Description}>
              <BaseText color="#fff">
                This is something more than just an e-wallet with an ability to
                transfer&nbsp;
                <span className={styles.Header_Description_Image}>
                  <Image
                    src="/images/icon/rocket.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </span>
                &nbsp;money.
              </BaseText>
            </div>

            <div className={styles.Header_Image}>
              <Image
                src="/images/image/ball.png"
                layout="fill"
                alt={'Images'}
                priority
              />
            </div>

            <div className={styles.Header_Ps}>
              <BaseText color="#E1F665">
                It&apos;s all your business in one place
              </BaseText>
            </div>

            <div className={styles.Header_IconArrow}>
              <BaseIcon viewBox="0 0 74 74" icon={ALL_ICONS.ARROW_TO_ACTION} />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default BusinessAccountHeader;
