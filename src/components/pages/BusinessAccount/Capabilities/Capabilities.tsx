import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './Capabilities.module.scss';

const Capabilities = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Capabilities}>
            <div className={styles.Capabilities_Items}>
              <div className={styles.Capabilities_Item}>
                <div className={styles.Capabilities_Number}>
                  <div>01</div>
                </div>
                <div className={styles.Capabilities_Description}>
                  Keep track of your payments, corporate cards and expenses from
                  one profile
                </div>
              </div>

              <div className={styles.Capabilities_Item}>
                <div className={styles.Capabilities_Number}>
                  <div>02</div>
                </div>
                <div className={styles.Capabilities_Description}>
                  Transfer and receive international payments without hidden
                  fees
                </div>
              </div>

              <div className={styles.Capabilities_Item}>
                <div className={styles.Capabilities_Number}>
                  <div>03</div>
                </div>
                <div className={styles.Capabilities_Description}>
                  Get the help with managing your business account
                </div>
              </div>
            </div>

            <div className={styles.Capabilities_Items}>
              <div className={styles.Capabilities_Item}>
                <div className={styles.Capabilities_Number}>
                  <div>04</div>
                </div>
                <div className={styles.Capabilities_Description}>
                  Use all your resources: you can issue cards physically or
                  virtually and track expenses online for the entire team
                </div>
              </div>

              <div className={styles.Capabilities_Item}>
                <div className={styles.Capabilities_Number}>
                  <div>05</div>
                </div>
                <div className={styles.Capabilities_Description}>
                  Control all processes without going anywhere and make a cool
                  business!
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Capabilities;
