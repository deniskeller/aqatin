import React from 'react';
import styles from './SendMoneyAbroadAbout.module.scss';
import Image from 'next/image';
import { BaseContainer, BaseIcon, BaseText } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

const SendMoneyAbroadAbout = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.About}>
            <div className={styles.About_Description}>
              <BaseText color="#fff">
                Use all the opportunities: transfer money to more than 30
                countries in more than 30 currencies.
              </BaseText>
              <br />

              <BaseText color="#E1F665">
                Enjoy honesty: send funds at the real exchange rate!
              </BaseText>
              <br />

              <div className={styles.About_Description_Currency}>
                <div className={styles.Currency_Item}>
                  <Image
                    src="/images/icon/euro-banknote.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </div>

                <div className={styles.Currency_Item}>
                  <Image
                    src="/images/icon/pound-banknote.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </div>

                <div className={styles.Currency_Item}>
                  <Image
                    src="/images/icon/yen-banknote.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </div>
              </div>
              <div className={styles.HowItWork}>How does it work?</div>

              <div className={styles.About_IconStar}>
                <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
              </div>

              <div className={styles.About_IconArrow}>
                <BaseIcon
                  viewBox="0 0 118 114"
                  icon={ALL_ICONS.ARROW_TO_ACTION}
                />
              </div>
            </div>

            <div className={styles.About_Instruction}>
              <div className={styles.Instruction_Item}>
                <div className={styles.Instruction_Item_Stage}>
                  <span>01</span>
                </div>
                <div className={styles.Instruction_Item_Description}>
                  Download the Aqatin App and register an account
                </div>
              </div>

              <div className={styles.Instruction_Item}>
                <div className={styles.Instruction_Item_Stage}>
                  <span>02</span>
                </div>
                <div className={styles.Instruction_Item_Description}>
                  Transfer money to your Aqatin account
                </div>
              </div>

              <div className={styles.Instruction_Item}>
                <div className={styles.Instruction_Item_Stage}>
                  <span>03</span>
                </div>
                <div className={styles.Instruction_Item_Description}>
                  Send money all over the world!
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default SendMoneyAbroadAbout;
