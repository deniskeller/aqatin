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

const links: Links[] = [
  {
    href: '/personal_account',
    title: 'Personal Account',
  },
  {
    href: '/business_account',
    title: 'Business Account',
  },
  {
    href: '/company',
    title: 'Company',
  },
];

const Navbar: React.FC<Props> = () => {
  const router = useRouter();
  const [visible, setVisible] = React.useState(false);
  const [color, setColor] = React.useState<string>('#000');
  const [burgerBg, setBurgerBg] = React.useState<string>('#000');

  React.useEffect(() => {
    //условие для смены цветом ссылок меню
    if (
      router.pathname == '/personal_account' ||
      router.pathname == '/business_account' ||
      router.pathname == '/budget_planning' ||
      router.pathname == '/remuneration_planning' ||
      router.pathname == '/culture' ||
      router.pathname == '/leadership' ||
      router.pathname == '/affiliates' ||
      router.pathname == '/influencers' ||
      router.pathname == '/help_center' ||
      router.pathname == '/security'
    ) {
      setBurgerBg('#fff');
      setColor('#fff');
    } else {
      setBurgerBg('#000');
      setColor('#000');
    }

    if (visible) {
      setColor('#fff');
      setBurgerBg('#fff');
    }
  }, [router.pathname, visible, burgerBg]);

  return (
    <div className={styles.Container}>
      <div
        className={`${styles.Burger} ${
          visible ? styles.Active : styles.NotActive
        }`}
        onClick={() => setVisible(!visible)}
      >
        <span style={{ background: burgerBg }}></span>
        <span style={{ background: burgerBg }}></span>
        <span style={{ background: burgerBg }}></span>
      </div>

      <div
        className={styles.Border}
        style={{ display: !visible ? 'block' : 'none', borderColor: color }}
      ></div>

      <div
        className={`${styles.Navbar} ${visible ? styles.Navbar_Visible : ''}`}
      >
        <ul className={styles.NavbarNav}>
          <Link href="/">
            <a>
              <div
                className={styles.Logo}
                style={{ display: !visible ? 'block' : 'none' }}
              >
                <BaseIcon
                  viewBox="0 0 209 56"
                  icon={ALL_ICONS.LOGO}
                  className={`${styles.Icon} ${
                    color == '#000' ? 'IconBlack' : 'IconWhite'
                  }`}
                />
              </div>
            </a>
          </Link>

          {links.map((link, index) => {
            return (
              <NavbarLink
                href={link.href}
                title={link.title}
                index={index}
                key={index}
                color={color}
              />
            );
          })}
        </ul>

        <div className={styles.NavbarAuth}>
          <BaseButton
            title="Sign up"
            type="link"
            size="mini"
            className={`${styles.Btn_Signup}`}
            style={{ color: color }}
            onClick={() => router.push('/coming_soon')}
          />

          <BaseButton
            title="Log in"
            size="mini"
            className={styles.Btn_Login}
            onClick={() => router.push('/coming_soon')}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
