import React from 'react';
import styles from './NotFound.module.scss';
import { BaseButton, BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.NotFound}>
            <div className={styles.NotFound_Card}>
              <h1>404</h1>
            </div>
            <div className={styles.NotFound_Title}>
              <div>page not found</div>
            </div>
            <div className={styles.NotFound_Subtitle}>
              <div>Sorry, we can’t find the page you’re looking for</div>
            </div>
            <div className={styles.NotFound_Action}>
              <div className={styles.NotFound_Icon}>
                <BaseIcon
                  icon={ALL_ICONS.ARROW_TO_ACTION}
                  viewBox="0 0 74 74"
                />
              </div>
              <BaseButton
                title="BACK TO HOME"
                onClick={() => router.push('/')}
                className={styles.Button}
              />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default NotFound;
