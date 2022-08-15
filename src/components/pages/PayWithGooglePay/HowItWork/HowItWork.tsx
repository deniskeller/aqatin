import { BaseContainer, BaseTitle } from '@base/index';
import React from 'react';
import styles from './HowItWork.module.scss';
import Image from 'next/image';

const HowItWork = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.HowItWork}>
            <div className={styles.HowItWork_Title}>
              <BaseTitle color="#fff" type="h2">
                How does it work?
              </BaseTitle>
            </div>

            <div className={styles.HowItWork_Instructions}>
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
                    Open the "Cards" tab, add your card&nbsp;
                    <span className={styles.Instruction_Description_Icon}>
                      <Image
                        src="/images/icon/credit-card.png"
                        layout="fill"
                        alt={'Images'}
                      />
                    </span>
                    &nbsp;to Google Pay and follow the simple instructions below
                  </p>
                </div>
              </div>

              <div className={styles.Instruction}>
                <div className={styles.Instruction_Stage}>
                  <span>03</span>
                </div>

                <div className={styles.Instruction_Description}>
                  <p>
                    Use your e-wallet!&nbsp;
                    <span className={styles.Instruction_Description_Icon}>
                      <Image
                        src="/images/icon/purse.png"
                        layout="fill"
                        alt={'Images'}
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default HowItWork;
