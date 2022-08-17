import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './ContactsHeader.module.scss';
import { PaddingTop } from '@content/index';
import dynamic from 'next/dynamic';

// const MapContacts = () => {
//   const Map = React.useMemo(
//     () =>
//       dynamic(() => import('../../../content/MapContacts/MapContacts'), {
//         loading: () => <p>A map is loading</p>,
//         ssr: false,
//       }),
//     []
//   );
//   return <Map />;
// };

const MapContacts = dynamic(
  () => import('../../../content/MapContacts/MapContacts'),
  {
    ssr: false,
  }
);

const ContactsHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className={styles.Info}>
              <div className={styles.Header_Title}>
                <BaseTitle color="#000">CONTACTS</BaseTitle>
              </div>

              <div className={styles.Header_Contacts}>
                <div className={styles.ContactItem}>
                  <div className={styles.ContactItem_Name}>
                    <BaseText color="#1B692C">Office Address</BaseText>
                  </div>

                  <div className={styles.ContactItem_Description}>
                    <p>17 State Street Suite 4000, NY 10004 Servcorp</p>
                  </div>
                </div>

                <div className={styles.ContactItem}>
                  <div className={styles.ContactItem_Name}>
                    <BaseText color="#1B692C">Phone Number</BaseText>
                  </div>

                  <div className={styles.ContactItem_Description}>
                    <p>+1(646)-417-9981</p>
                  </div>
                </div>

                <div className={styles.ContactItem}>
                  <div className={styles.ContactItem_Name}>
                    <BaseText color="#1B692C">Email Address</BaseText>
                  </div>

                  <div className={styles.ContactItem_Description}>
                    <p>INFO@AGAQIN.COM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.Map}>
              <MapContacts />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default ContactsHeader;
