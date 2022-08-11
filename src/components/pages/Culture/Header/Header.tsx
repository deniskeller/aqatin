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
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className={styles.Header_Title}>
              <BaseTitle color="#fff">CULTURE</BaseTitle>
            </div>

            <div className={styles.Header_Description}>
              <BaseText color="#fff">
                we are sure that by bringing together amazing people who are
                passionate about their work, we can become invincible. We are
                sure that money is something about people and for people.
                That&apos;s why the comfort of our team and clients is the main
                measure of Aqatin&apos;s success.
              </BaseText>
            </div>

            <div className={styles.Header_Image}>
              <BaseIcon viewBox="0 0 463 462" icon={ALL_ICONS.CULTURE_IMAGE} />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Header;
