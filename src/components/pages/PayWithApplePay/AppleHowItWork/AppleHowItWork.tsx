import { BaseContainer, BaseTitle } from '@base/index';
import React from 'react';
import styles from './AppleHowItWork.module.scss';
import Image from 'next/image';

const AppleHowItWork = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.HowItWork}>
            <div className={styles.HowItWork_Title}>
              <BaseTitle color="#000" type="h2">
                How does it work?
              </BaseTitle>
            </div>

            <div className={styles.HowItWork_Instructions}>
              <div className={styles.HowItWork_Instructions_Left}>
                <div className={styles.Instruction}>
                  <div className={styles.Instruction_Stage}>
                    <span>01</span>
                  </div>

                  <div className={styles.Instruction_Description}>
                    <p>
                      Download&nbsp;
                      <span className={styles.Instruction_Description_Icon}>
                        <Image
                          src="/images/icon/mobile-phone.png"
                          layout="fill"
                          alt={'Images'}
                        />
                      </span>
                      &nbsp;the Aqatin App and create an account
                    </p>
                  </div>
                </div>

                <div className={styles.Instruction}>
                  <div className={styles.Instruction_Stage}>
                    <span>02</span>
                  </div>

                  <div className={styles.Instruction_Description}>
                    <p>
                      Open the "Cards" tab and add your card in Apple
                      Wallet&nbsp;
                      <span className={styles.Instruction_Description_Icon}>
                        <Image
                          src="/images/icon/purse.png"
                          layout="fill"
                          alt={'Images'}
                        />
                      </span>
                      , follow the instructions below
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.HowItWork_Instructions_Right}>
                <div className={styles.Instruction}>
                  <div className={styles.Instruction_Stage}>
                    <span>03</span>
                  </div>

                  <div className={styles.Instruction_Description}>
                    <p>
                      Open the Wallet App on your gadget and add the Aqatin
                      card&nbsp;
                      <span className={styles.Instruction_Description_Icon}>
                        <Image
                          src="/images/icon/credit-card.png"
                          layout="fill"
                          alt={'Images'}
                        />
                      </span>
                    </p>
                  </div>
                </div>

                <div className={styles.Instruction}>
                  <div className={styles.Instruction_Stage}>
                    <span>04</span>
                  </div>

                  <div className={styles.Instruction_Description}>
                    <p>
                      Use your money!&nbsp;
                      <span className={styles.Instruction_Description_Icon}>
                        <Image
                          src="/images/icon/money_bag_icon.png"
                          layout="fill"
                          alt={'Images'}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default AppleHowItWork;
