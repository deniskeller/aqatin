import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';
import { ALL_ICONS } from '@constants/icons';

const Header = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Overlay}></div>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className={styles.Header_Title}>
              <BaseTitle color="#fff">LEADERSHIP</BaseTitle>
            </div>

            <div className={styles.Header_Description}>
              <div className={styles.Text}>
                <BaseText color="#fff">
                  Our company is a reliable team that will make your finances
                  work and be safe.&nbsp;
                  <span className={styles.Icon}>
                    <Image
                      src="/images/icon/money_bag_icon.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                  &nbsp;We pay a lot of attention to the latter: we are
                  strengthening our anti-fraud, anti-money laundering,
                  anti-online fraud and anti-terrorist financing departments.
                </BaseText>
              </div>
              <br className={styles.Br} />
              <br className={styles.Br} />
              <div className={styles.Text}>
                <BaseText color="#fff">
                  We are reaching for standards that ensure growth for us and
                  our clients. We always try to find different solutions and go
                  beyond our mind sets and be the true support for you. &nbsp;
                  <span className={styles.Icon}>
                    <Image
                      src="/images/icon/handshake_icon.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                </BaseText>
              </div>
            </div>
            <div className={styles.Header_IconStar}>
              <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Header;
