import { BaseButton, BaseContainer, BaseIcon, BaseInput } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';

const navbar_list = [
  {
    title: 'Money',
    list: [
      { name: 'Send money abroad', href: '/' },
      { name: 'Business Account', href: '/' },
      { name: 'Merchant Account', href: '/' },
      { name: 'Pay with Apple Pay', href: '/' },
      { name: 'Pay with Google Pay', href: '/' },
    ],
  },
  {
    title: 'control',
    list: [
      { name: 'Funds Management', href: '/' },
      { name: 'Budget Planning', href: '/' },
      { name: 'Loyalty Programs', href: '/' },
      { name: 'Remuneration Planning', href: '/' },
    ],
  },
  {
    title: 'plans',
    list: [
      { name: 'Business', href: '/' },
      { name: 'Personal', href: '/' },
      { name: 'Associations', href: '/' },
    ],
  },
  {
    title: 'company',
    list: [
      { name: 'About', href: '/' },
      { name: 'Contacts', href: '/' },
      { name: 'Careers', href: '/' },
      { name: 'Culture', href: '/' },
      { name: 'Leadership', href: '/' },
      { name: 'Affiliates', href: '/' },
      { name: 'Influencers', href: '/' },
    ],
  },
  {
    title: 'help',
    list: [
      { name: 'Help Center', href: '/' },
      { name: 'Security', href: '/' },
      { name: 'Developer APIs', href: '/' },
    ],
  },
];

const Footer = () => {
  const [value, setValue] = React.useState<string>('');
  const [success, setSuccess] = React.useState<boolean>(false);

  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Footer}>
            <div className={styles.Footer_Top}>
              <div className={styles.Footer_Logo}>
                <Link href="/">
                  <a>
                    <div className={styles.Logo}>
                      <BaseIcon
                        viewBox="0 0 209 56"
                        icon={ALL_ICONS.LOGO}
                        className={styles.Icon}
                      />
                    </div>
                  </a>
                </Link>
                <div className={styles.Copyright}>
                  Copyright © 2022 Aqatin <br /> All TM rights reserved. 
                </div>
              </div>

              <div className={styles.Navbar}>
                {navbar_list?.map((item, index) => {
                  return (
                    <div key={index} className={styles.Navbar_Item}>
                      <div className={styles.Navbar_Title}>
                        <span>{item.title}</span>
                      </div>
                      <ul className={styles.Navbar_Ul}>
                        {item.list?.map((el, i) => {
                          return (
                            <Link href={el.href} key={i}>
                              <a>
                                <li className={styles.Navbar_Li}>
                                  <span>{el.name}</span>
                                </li>
                              </a>
                            </Link>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.Footer_Bottom}>
              <div className={styles.Social}>
                <div className={styles.SocialItems}>
                  <Link href="/">
                    <a>
                      <div
                        className={`${styles.SocialIcon} ${styles.Facebook}`}
                      >
                        <BaseIcon
                          viewBox="0 0 9 19"
                          icon={ALL_ICONS.FACEBOOK}
                        />
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a>
                      <div
                        className={`${styles.SocialIcon} ${styles.Instagram}`}
                      >
                        <BaseIcon
                          viewBox="0 0 17 18"
                          icon={ALL_ICONS.INSTAGRAM}
                          className={styles.Icon}
                        />
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a>
                      <div className={`${styles.SocialIcon} ${styles.Twitter}`}>
                        <BaseIcon
                          viewBox="0 0 20 17"
                          icon={ALL_ICONS.TWITTER}
                          className={styles.Icon}
                        />
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a>
                      <div
                        className={`${styles.SocialIcon} ${styles.Linkedin}`}
                      >
                        <BaseIcon
                          viewBox="0 0 18 18"
                          icon={ALL_ICONS.LINKEDIN}
                          className={styles.Icon}
                        />
                      </div>
                    </a>
                  </Link>
                </div>

                <div className={styles.LinkHosted}>
                  <span>
                    Hosted at&nbsp;
                    <Link href="/">
                      <a>Google Cloud</a>
                    </Link>
                  </span>
                </div>
              </div>

              <div className={styles.Form}>
                {!success ? (
                  <>
                    <div className={styles.Form_Title}>
                      <span>SUBMIT FOR UPDATES</span>
                    </div>
                    <div className={styles.Form_Actions}>
                      <BaseInput
                        size="mini"
                        name="mail"
                        placeholder="Email address"
                        type="mail"
                        value={value}
                        onChange={(val: string) => setValue(val)}
                        className={styles.Input}
                      />
                      <BaseButton
                        type="success"
                        onClick={() => setSuccess(true)}
                        className={styles.Button}
                      >
                        <BaseIcon
                          viewBox="0 0 31 24"
                          icon={ALL_ICONS.ARROW_RIGHT}
                          className={styles.Icon}
                        />
                      </BaseButton>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={styles.SuccessAlert}
                      style={{ opacity: success ? '1' : '0' }}
                    >
                      <div className={styles.SuccessAlert_Title}>
                        <span>Thank you!</span>
                      </div>
                      <div className={styles.SuccessAlert_Subtitle}>
                        <span>
                          Your email was sucesfully added to our list!
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className={styles.Employees}>
                <div className={styles.Mastercard}>
                  <BaseIcon
                    viewBox="0 0 45 33"
                    icon={ALL_ICONS.MASTERCARD}
                    className={styles.Icon}
                  />
                </div>
                <div className={styles.Ico}>
                  <Image
                    src="/images/icon/ico.png"
                    layout="fill"
                    alt={'Employees images'}
                  />
                </div>
                <div className={styles.Pci}>
                  <BaseIcon
                    viewBox="0 0 91 30"
                    icon={ALL_ICONS.PCI}
                    className={styles.Icon}
                  />
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Footer;
