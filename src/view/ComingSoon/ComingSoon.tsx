import React from 'react';
import styles from './ComingSoon.module.scss';
import { BaseButton, BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { useRouter } from 'next/router';

const ComingSoon = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.ComingSoon}>
            <div className="animate__animated animate__fadeIn animate__delay-1s">
              <div className={styles.ComingSoon_Title}>
                <h1>coming soon</h1>
              </div>
            </div>
            <div className={styles.ComingSoon_Action}>
              <div className="animate__animated animate__fadeInDownBig animate__delay-1s">
                <div className={styles.ComingSoon_Icon}>
                  <BaseIcon
                    icon={ALL_ICONS.ARROW_TO_ACTION}
                    viewBox="0 0 74 74"
                  />
                </div>
              </div>
              <div className="animate__animated ComingSoon_Button animate__fadeIn animate__delay-2s">
                <BaseButton
                  title="BACK TO HOME"
                  onClick={() => router.push('/')}
                  className={styles.Button}
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default ComingSoon;
