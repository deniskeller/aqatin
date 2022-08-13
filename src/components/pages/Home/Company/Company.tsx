import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './Company.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from 'next/image';

const Company = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Company}>
            <div className={styles.Company_Aboutinfo}>
              <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
                <div className={styles.Title}>
                  <BaseTitle color="#1B692C" type="h3">
                    COMPANY
                  </BaseTitle>
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__fadeIn animate__delay-2s"
                animateOnce
              >
                <div className={styles.Description}>
                  <BaseText color="#948F8F">
                    Aqatin is a payment system which was created specifically
                    for the UK sport industry. Our clients are special to us.
                    They had a character and own specialities so we want to take
                    care of all your needs and requirements while working with
                    your money.
                  </BaseText>
                </div>
              </AnimationOnScroll>
            </div>

            <AnimationOnScroll animateIn="animate__zoomIn" animateOnce>
              <div className={styles.Company_Image}>
                <Image
                  src="/images/image/football_field.png"
                  layout="fill"
                  alt={'Companies images'}
                />
              </div>
            </AnimationOnScroll>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Company;
