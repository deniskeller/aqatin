import { BaseContainer } from '@base/index';
import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Footer}>
            <h2>Footer</h2>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Footer;
