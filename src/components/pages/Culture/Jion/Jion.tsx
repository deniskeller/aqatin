import { BaseButton, BaseContainer, BaseIcon, BaseText } from '@base/index';
import React from 'react';
import styles from './Jion.module.scss';
import Image from 'next/image';

const Jion = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Overlay}></div>
        <BaseContainer>
          <div className={styles.Jion}>
            <div className={styles.Jion_Text}>
              <BaseText color="#E8E268">
                Because there is no limit that can't be taken together!
              </BaseText>
            </div>

            <BaseButton title="JOIN us" className={styles.Jion_Button} />
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Jion;
