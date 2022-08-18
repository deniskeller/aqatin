import React from 'react';
import styles from './CompanyAbout.module.scss';
import Image from 'next/image';

const CompanyAbout = () => {
  return (
    <>
      <div className={styles.About}>
        <div className={styles.About_Shape}>
          <div className={styles.Text}>
            <p>
              We make the process of collecting money and monitoring the
              procedures during the championships and other sport events much
              easier.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyAbout;
