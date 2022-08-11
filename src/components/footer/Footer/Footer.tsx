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
      { name: 'Send money abroad', href: '/coming_soon' },
      { name: 'Business Account', href: '/coming_soon' },
      { name: 'Merchant Account', href: '/coming_soon' },
      { name: 'Pay with Apple Pay', href: '/coming_soon' },
      { name: 'Pay with Google Pay', href: '/coming_soon' },
    ],
  },
  {
    title: 'control',
    list: [
      { name: 'Funds Management', href: '/coming_soon' },
      { name: 'Budget Planning', href: '/coming_soon' },
      { name: 'Loyalty Programs', href: '/coming_soon' },
      { name: 'Remuneration Planning', href: '/coming_soon' },
    ],
  },
  {
    title: 'plans',
    list: [
      { name: 'Business', href: '/coming_soon' },
      { name: 'Personal', href: '/coming_soon' },
      { name: 'Associations', href: '/coming_soon' },
    ],
  },
  {
    title: 'company',
    list: [
      { name: 'About', href: '/coming_soon' },
      { name: 'Contacts', href: '/coming_soon' },
      { name: 'Careers', href: '/coming_soon' },
      { name: 'Culture', href: '/culture' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Affiliates', href: '/coming_soon' },
      { name: 'Influencers', href: '/coming_soon' },
    ],
  },
  {
    title: 'help',
    list: [
      { name: 'Help Center', href: '/coming_soon' },
      { name: 'Security', href: '/security' },
      { name: 'Developer APIs', href: '/coming_soon' },
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
                            <li className={styles.Navbar_Li} key={i}>
                              <Link href={el.href}>
                                <a>
                                  <span>{el.name}</span>
                                </a>
                              </Link>
                            </li>
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
                  <span
                    className={styles.FormEmail}
                    style={{ opacity: !success ? '1' : '0' }}
                  >
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
                  </span>
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
                        Your email was sucesfully added to our list!
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
