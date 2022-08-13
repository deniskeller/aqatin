import { BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import React from 'react';
import styles from './ChooseProfile.module.scss';
import { ALL_ICONS } from '@constants/icons';

const ChooseProfile = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.ChooseProfile}>
            <div className={styles.ChooseProfile_Title}>
              <BaseTitle type="h3" color="#fff">
                CHOOSE THE PROFILE
              </BaseTitle>
            </div>

            <div className={styles.ChooseProfile_Content}>
              <div className={styles.PersonalAccount}>
                <div className={styles.Account_Number}>
                  <div>01</div>
                </div>

                <div className={styles.Account_Name}>
                  <span>
                    PERSONAL <br /> ACCOUNT
                  </span>
                  <div className={styles.Account_Name_Shape}></div>
                </div>

                <div className={styles.PersonalAccount_Arrow}>
                  <BaseIcon
                    viewBox="0 0 74 74"
                    icon={ALL_ICONS.ARROW_TO_ACTION}
                  />
                </div>

                <div className={styles.PersonalAccount_ForWhom}>
                  <p>for sport agents, advertisers and sport arenas</p>
                </div>
              </div>

              <div className={styles.BusinessAccount}>
                <div className={styles.Account_Number}>
                  <div>02</div>
                </div>

                <div className={styles.Account_Name}>
                  <span>
                    BUSINESS <br /> ACCOUNT
                  </span>
                  <div className={styles.Account_Name_Shape}></div>
                </div>

                <div className={styles.BusinessAccount_Arrow}>
                  <BaseIcon
                    viewBox="0 0 74 74"
                    icon={ALL_ICONS.ARROW_TO_ACTION}
                  />
                </div>

                <div className={styles.BusinessAccountt_ForWhom}>
                  <p>
                    for athletes, for private transactions and for budget
                    control
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default ChooseProfile;
