import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './CultureAbout.module.scss';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';

const CultureAbout = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.About}>
            <div className={styles.About_Description}>
              <BaseText color="#fff">
                We do not compromise and always reach our goals.
                <span className={styles.About_Description_Icon}>
                  <Image
                    src="/images/icon/darts.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </span>
                &nbsp;We develop talents within our company so they can work
                better for the&nbsp;
                <span>development and safety of our clients.</span>
              </BaseText>
            </div>

            <div className={styles.About_Question}>
              <BaseText color="#fff">You know what? It works!</BaseText>
            </div>

            <div className={styles.About_Answer}>
              <BaseText color="#E8E268">It&apos;s never enough. </BaseText>
            </div>

            <div className={styles.About_IconStasr}>
              <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default CultureAbout;
