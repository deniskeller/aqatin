import React from 'react';
import styles from './PersonalAccount.module.scss';
import { BaseButton, BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { useRouter } from 'next/router';

const PersonalAccount = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Padding_Top}></div>
          <div className={styles.PersonalAccount}>
            <h1>Personal Account page</h1>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default PersonalAccount;
