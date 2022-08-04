import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BaseButton, BaseIcon } from '@base/index';
import { NavbarLink } from '@nav/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {}

const links = [
  {
    href: '/personal_account',
    title: 'Personal Account',
  },
  {
    href: '/cusiness_account',
    title: 'Business Account',
  },
  {
    href: '/company',
    title: 'Company',
  },
];

const Navbar: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <div className={styles.Container}>
      <div className={styles.Navbar}>
        <ul className={styles.NavbarNav}>
          {links.map((link, index) => {
            return (
              <NavbarLink
                href={link.href}
                title={link.title}
                index={index}
                key={index}
              />
            );
          })}
        </ul>

        <div className={styles.NavbarAuth}>
          <BaseButton
            title="Sign up"
            type="link"
            size="mini"
            className={styles.Btn_Signup}
          />

          <BaseButton title="Log in" size="mini" className={styles.Btn_Login} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
