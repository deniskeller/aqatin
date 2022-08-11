import { BaseButton, BaseContainer, BaseText } from '@base/index';
import React from 'react';
import styles from './Jion.module.scss';

const Jion = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Jion}>
            <div className={styles.Jion_Text}>
              <BaseText color="#E8E268">
                Our specialists will help you to create a system of employee
                certification so that the best people stay with you.
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
