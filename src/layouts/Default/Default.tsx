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

  // const scrollToTop = () => {
  //   document.body.scrollTop = 0; // Для Safari
  //   document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
  // };

  // const scrollFunction = () => {
  //   if (
  //     document.body.scrollTop > 700 ||
  //     document.documentElement.scrollTop > 700
  //   ) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== undefined && typeof document !== undefined) {
  //     window.onscroll = function () {
  //       scrollFunction();
  //     };
  //   }
  // }, []);

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      setIsVisible(true);
    }
    if (scrolled < coords) {
      setIsVisible(false);
    }
  }

  function backToTop() {
    console.log('backToTop: ');
    if (typeof window !== undefined) {
      if (window.pageYOffset > 0) {
        // window.scrollBy(0, -80);
        // setTimeout(backToTop, 0);
        document.body.scrollTop = 0; // Для Safari
        document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
      }
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      window.onscroll = function () {
        trackScroll();
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
            // onClick={scrollToTop}
            onClick={backToTop}
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
