import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavbarLink.module.scss';

interface Props {
  href: string;
  title: string;
  index?: number;
  color: string;
}

const NavbarLink: React.FC<Props> = ({
  href,
  title,
  index,
  color = '#000',
}) => {
  const router = useRouter();

  return (
    <li key={index} className={styles.Li}>
      <Link href={href}>
        <a
          className={`${
            router.pathname.split('/')[1] === href.split('/')[1]
              ? styles.Active
              : ''
          } ${styles.Link}`}
          style={{ color: color }}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default NavbarLink;
