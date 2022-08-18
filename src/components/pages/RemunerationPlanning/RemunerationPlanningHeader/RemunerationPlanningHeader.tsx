import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './RemunerationPlanningHeader.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';

const RemunerationPlanningHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className="animate__animated animate__fadeInLeft animate__delay">
              <div className={styles.Header_Title}>
                <BaseTitle color="#fff">
                  REMUNERATION <br /> PLANNING
                </BaseTitle>
              </div>
            </div>

            <div className="animate__animated animate__fadeInLeft animate__delay-2s">
              <div className={styles.Header_Description}>
                <BaseText color="#fff">
                  We do understand the qualifications of our colleagues attract
                  other companies. We understand our colleagues are regularly
                  offered jobs. And we can tell you how to provide them with
                  such conditions so they don't want to leave your
                  company.&nbsp;
                  <span className={styles.Header_Description_Icon}>
                    <Image
                      src="/images/icon/smiling-face-with-hearts.png"
                      layout="fill"
                      alt={'Images'}
                    />
                  </span>
                </BaseText>
              </div>
            </div>

            <div className="animate__animated animate__zoomIn animate__zoomIn__new_style animate__delay-3s">
              <div className={styles.Header_Image}>
                <Image
                  src="/images/image/remuneration_planning_image.png"
                  layout="fill"
                  alt={'Images'}
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default RemunerationPlanningHeader;
