import { BaseButton, BaseContainer, BaseIcon, BaseText } from '@base/index';
import React from 'react';
import styles from './Join.module.scss';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';

const Join = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Overlay}></div>
        <BaseContainer>
          <div className={styles.Join}>
            <div className={styles.Join_Text}>
              <BaseText color="#E8E268">
                Create a business account for free!
              </BaseText>

              <div className={styles.Join_ArrowIcon}>
                <BaseIcon
                  viewBox="0 0 74 74"
                  icon={ALL_ICONS.ARROW_TO_ACTION}
                />
              </div>
            </div>

            <BaseButton
              title="JOIN TO AQATINs"
              className={styles.Join_Button}
            />
          </div>
        </BaseContainer>

        <div className={styles.Shape}>
          <p>TEAM MONEY IS NICE IF IT'S AQATIN</p>
        </div>
      </div>
    </>
  );
};

export default Join;
