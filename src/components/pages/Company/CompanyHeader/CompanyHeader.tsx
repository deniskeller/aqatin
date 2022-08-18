import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseText,
  BaseTitle,
} from '@base/index';
import React from 'react';
import styles from './CompanyHeader.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';
import { ALL_ICONS } from '@constants/icons';

const CompanyHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className={styles.Header_Title}>
              <BaseTitle color="#000">
                ABOUT <br /> COMPANY
              </BaseTitle>
            </div>

            <div className={styles.Header_Description}>
              <div className={styles.Description_Left}>
                <div className={styles.Header_IconStar}>
                  <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
                </div>

                <BaseText color="#000">
                  Aqatin is a payment system which was created specifically for
                  the UK sport industry. Our clients are special to us.&nbsp;
                  <span className={styles.Header_Description_Icon}>
                    <Image
                      src="/images/icon/diamond.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                </BaseText>

                <BaseText color="#000">
                  They had a character and own specialities so we want to take
                  care of all your needs and requirements while working with
                  your money.
                </BaseText>
              </div>

              <div className={styles.Header_Description_Right}>
                <BaseText color="#000">
                  Among our clients we have athletes from the UK, their
                  managers, advertisers, sports centres, sport arenas, ticket
                  sale companies for sport events and associations.
                </BaseText>

                <BaseButton title="Let’s go!" className={styles.Button} />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default CompanyHeader;
