import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseText,
  BaseTitle,
} from '@base/index';
import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';
import { ALL_ICONS } from '@constants/icons';

const Header = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className={styles.Header_Title}>
              <BaseTitle color="#000">
                SEND MONEY <br /> ABROAD
              </BaseTitle>
            </div>

            <div className={styles.Header_Description}>
              <BaseText color="#000">
                Transfer funds within the country and abroad like
                lightning&nbsp;
                <span className={styles.Header_Description_Icon}>
                  <Image
                    src="/images/icon/high-voltage.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </span>
                &nbsp;and ... for free!
              </BaseText>
              <br />
              <BaseText color="#000">
                Save your time and finances: send money quickly, without hidden
                fees or rates.
              </BaseText>
            </div>

            <div className={styles.Header_Image}>
              <Image
                src="/images/image/send_money_abroad_image.png"
                layout="fill"
                alt={'Images'}
              />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Header;
