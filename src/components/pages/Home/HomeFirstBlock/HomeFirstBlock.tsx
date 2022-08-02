import { BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import styles from './HomeFirstBlock.module.scss';

const HomeFirstBlock = () => {
  return (
    <>
      <BaseContainer>
        <div className={styles.Padding_Top}></div>
        <div className={styles.Header}>
          <div className={styles.Header_Logo}>
            <BaseIcon
              viewBox="0 0 209 56"
              icon={ALL_ICONS.LOGO}
              className={styles.Icon}
            />
          </div>
          <div className={styles.Header_Title}>
            <BaseTitle>
              We are connecting both of your passions: <br />
              <span>money and sport</span>
            </BaseTitle>
          </div>
        </div>
        <div className={styles.Subtitle}>
          <h2>Create an account and control your finances</h2>
        </div>
      </BaseContainer>
    </>
  );
};

export default HomeFirstBlock;
