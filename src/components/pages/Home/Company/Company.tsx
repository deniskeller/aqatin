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
              <AnimationOnScroll animateIn="animate__fadeInLeft">
                <div className={styles.Title}>
                  <BaseTitle color="#1B692C" type="h2">
                    OUR SERVICES
                  </BaseTitle>
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__fadeIn">
                <div className={styles.Description}>
                  <BaseText color="#948F8F">
                    We focused on the sports industry for a reason. The fact is
                    that this area connects thousands of people with different
                    tasks, needs and financial capabilities. We made a decision
                    to pay attention to each and every client. That`s why you
                    can find different services on Aqatin platform:
                  </BaseText>
                </div>
              </AnimationOnScroll>
            </div>

            <AnimationOnScroll animateIn="animate__zoomIn">
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
