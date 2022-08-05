import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BaseButton, BaseIcon } from '@base/index';
import { NavbarLink } from '@nav/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {}

interface Links {
  [key: string]: string;
}

const Navbar: React.FC<Props> = () => {
  const router = useRouter();
  const [visible, setVisible] = React.useState(false);
  const [links, setLinks] = React.useState<Links[]>([]);

  React.useEffect(() => {
    const links1 = [
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
    const links2 = [
      {
        href: '/',
        title: 'home',
      },
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
    if (router.pathname != '/') {
      setLinks(links2);
    } else {
      setLinks(links1);
    }
  }, [router.pathname]);

  return (
    <div className={styles.Container}>
      <Link href="/">
        <a>
          <div
            className={styles.Logo}
            style={{ display: !visible ? 'block' : 'none' }}
          >
            <BaseIcon
              viewBox="0 0 209 56"
              icon={ALL_ICONS.LOGO}
              className={styles.Icon}
            />
          </div>
        </a>
      </Link>

      <div
        className={`${styles.Burger} ${
          visible ? styles.Active : styles.NotActive
        }`}
        onClick={() => setVisible(!visible)}
      >
        <span style={{ background: !visible ? '#000' : '#fff' }}></span>
        <span style={{ background: !visible ? '#000' : '#fff' }}></span>
        <span style={{ background: !visible ? '#000' : '#fff' }}></span>
      </div>

      <div
        className={styles.Border}
        style={{ display: !visible ? 'block' : 'none' }}
      ></div>

      <div
        className={`${styles.Navbar} ${visible ? styles.Navbar_Visible : ''}`}
      >
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
