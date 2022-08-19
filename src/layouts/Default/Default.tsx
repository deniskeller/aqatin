import React, { useEffect, useRef, useState } from 'react';
import styles from './Default.module.scss';
import { Navbar } from '@nav/index';
import { Footer } from 'components/footer';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  children: JSX.Element;
}

const Default: React.FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (typeof window !== undefined && typeof document !== undefined) {
      window.onscroll = function () {
        scrollFunction();
      };
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.Content}>
        {children}

        {isVisible ? (
          <button
            onClick={scrollToTop}
            className={styles.ScrollToTop}
            title="Go to top"
          >
            <BaseIcon
              viewBox="0 0 31 24"
              icon={ALL_ICONS.ARROW_RIGHT}
              className={styles.Icon}
            />
          </button>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default Default;
