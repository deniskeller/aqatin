import React from 'react';
import styles from './SuccessFormAlert.module.scss';
import Image from 'next/image';

interface Props {
  success?: boolean;
}

const SuccessFormAlert: React.FC<Props> = ({ success = false }) => {
  return (
    <>
      <div
        className={styles.SuccessAlert}
        style={{ opacity: success ? '1' : '0' }}
      >
        <div className={styles.SuccessAlert_Title}>
          <span>Thank you for contacting us!</span>
        </div>
        <div className={styles.SuccessAlert_Subtitle}>
          We read every message and typically respond within 48 hours if a reply
          is required.
        </div>

        <div className={styles.SuccessAlert_Icon}>
          <Image src="/images/icon/thumbs-up.png" layout="fill" alt={'Image'} />
        </div>
      </div>
    </>
  );
};

export default SuccessFormAlert;
