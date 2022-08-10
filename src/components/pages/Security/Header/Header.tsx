import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';

const Header = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className={styles.Header_Title}>
              <BaseTitle color="#fff">security</BaseTitle>
            </div>

            <div className={styles.Header_Description}>
              <BaseText color="#fff">
                Security is a top priority for our company. We did a great job
                to make your money act as well as ball in the hands of the best
                goalkeeper in the world.&nbsp;
                <span className={styles.Header_Description_Icon}>
                  <Image
                    src="/images/icon/security_american_football_icon.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </span>
              </BaseText>{' '}
              <br />
              <BaseText color="#fff">
                Our system provides maximum security and monitors the situation
                each and every second to make everything work as it should.
              </BaseText>
            </div>

            <div className={styles.Header_Image}>
              <Image
                src="/images/image/security_image.png"
                layout="fill"
                alt={'Images'}
                priority
              />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Header;
