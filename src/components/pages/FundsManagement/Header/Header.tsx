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
            <div className={styles.Top_Content}>
              <div className={styles.Description}>
                <div className={styles.Title}>
                  <BaseTitle color="#000">
                    FUNDS <br /> MANAGEMENT
                  </BaseTitle>
                </div>

                <BaseText color="#000">
                  What advantages do you get by using the business account on
                  our platform:
                </BaseText>
              </div>

              <div className={styles.Stickers}>
                <div className={styles.Sticker}>
                  <div className={styles.Overlay}></div>
                  <div className={styles.Sticker_Title}>
                    Convenient and secure management of your team's expenses{' '}
                  </div>
                </div>

                <div className={`${styles.Sticker} ${styles.Sticker2}`}>
                  <div className={styles.Overlay}></div>
                  <div className={styles.Sticker_Title}>
                    Expense managing and one-click confirmation
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.Bottom_Content}>
              <div className={`${styles.Stickers} ${styles.Stickers2}`}>
                <div className={styles.Sticker}>
                  <div className={styles.Overlay}></div>
                  <div className={styles.Sticker_Title}>
                    Quickly transfer expenses to a spreadsheet for reports
                  </div>
                </div>

                <div className={`${styles.Sticker} ${styles.Sticker2}`}>
                  <div className={styles.Overlay}></div>
                  <div className={styles.Sticker_Title}>
                    Reminders to the team about cost control
                  </div>
                </div>

                <div className={styles.IconStar}>
                  <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
                </div>
              </div>

              <div className={`${styles.Stickers} ${styles.Stickers3}`}>
                <div className={styles.Sticker}>
                  <div className={styles.Overlay}></div>
                  <div className={styles.Sticker_Title}>
                    Expense report on a regular basis
                  </div>
                </div>

                <div className={`${styles.Sticker} ${styles.Sticker2}`}>
                  <div className={styles.Overlay}></div>
                  <div className={styles.Sticker_Title}>
                    Fast communication from anywhere: your team can send you a
                    bill photocopy and add notes in case of expense explanation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Header;
