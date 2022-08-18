import { BaseButton, BaseContainer, BaseText } from '@base/index';
import React from 'react';
import styles from './LeadershipJoin.module.scss';
import Image from 'next/image';

const LeadershipJoin = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Join}>
            <div className={styles.Join_Description}>
              <BaseText color="#fff">
                We are sure everyone should be able to get better service
                regardless of the place of stay. Everyone has the right to
                protect their money.
              </BaseText>

              <div className={styles.Join_Description_Image}>
                <Image
                  src="/images/image/leadership_image.png"
                  layout="fill"
                  alt={'Images'}
                  priority
                />
              </div>
            </div>

            <BaseButton title="JOIN us" className={styles.Join_Button} />

            <BaseText color="#E8E268">and prosper in comfort!</BaseText>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default LeadershipJoin;
