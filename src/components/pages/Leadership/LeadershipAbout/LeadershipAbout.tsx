import { BaseContainer, BaseIcon } from '@base/index';
import React from 'react';
import styles from './LeadershipAbout.module.scss';
import { ALL_ICONS } from '@constants/icons';

const LeadershipAbout = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.About}>
            <div className={`${styles.About_Item} ${styles.About_Item1}`}>
              <div className={styles.About_Item_Count}>220</div>
              <div className={styles.About_Item_Arrow}>
                <BaseIcon
                  viewBox="0 0 74 74"
                  icon={ALL_ICONS.ARROW_TO_ACTION}
                />
              </div>
              <div className={styles.About_Item_Description}>
                <p>countries covered</p>
              </div>
            </div>

            <div className={`${styles.About_Item} ${styles.About_Item2}`}>
              <div className={styles.About_Item_Count}>76</div>
              <div className={styles.About_Item_Arrow}>
                <BaseIcon
                  viewBox="0 0 74 74"
                  icon={ALL_ICONS.ARROW_TO_ACTION}
                />
              </div>
              <div className={styles.About_Item_Description}>
                <p>
                  special documents received for working with local financial
                  regulators
                </p>
              </div>
            </div>

            <div className={`${styles.About_Item} ${styles.About_Item3}`}>
              <div className={styles.About_Item_Count}>6500</div>
              <div className={styles.About_Item_Arrow}>
                <BaseIcon
                  viewBox="0 0 74 74"
                  icon={ALL_ICONS.ARROW_TO_ACTION}
                />
              </div>
              <div className={styles.About_Item_Description}>
                <p>types of documents in our trustbox that you can check</p>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default LeadershipAbout;
