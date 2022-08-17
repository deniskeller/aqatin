import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './InfluencersHeader.module.scss';
import { PaddingTop } from '@content/index';
import Image from 'next/image';

const InfluencersHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Overlay}></div>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className={styles.Header_Title}>
              <BaseTitle color="#fff">influencers</BaseTitle>
            </div>

            <div className={styles.Header_Description}>
              <div className={styles.Column1}>
                <BaseText color="#fff">
                  You can become our information representative.&nbsp;
                  <span className={styles.Header_Description_Icon}>
                    <Image
                      src="/images/icon/star-struck.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                </BaseText>
                <br />
                <BaseText color="#fff">
                  We are sure that high-quality financial services should be
                  brought to the masses. People deserve it. But we need your
                  help to spread the word about the opportunities that Aqatin
                  provides.
                </BaseText>
              </div>

              <div className={styles.Column2}>
                <BaseText color="#fff">
                  You can become our influencer and take part in global
                  financial transformation where people refuse to agree on
                  low-quality and unsafe money operations.
                </BaseText>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default InfluencersHeader;
