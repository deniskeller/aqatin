import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import React from 'react';
import styles from './CareersHeader.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';
import Marquee from 'react-fast-marquee';

const CareersHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className={styles.Header_Title}>
              <BaseTitle color="#000">CAREERS</BaseTitle>
            </div>

            <div className={styles.Header_Description}>
              <BaseText color="#000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae laoreet odio. Phasellus suscipit tincidunt enim, et
                volutpat risus commodo et. Ut cursus laoreet massa, vitae
                malesuada enim iaculis ut.
              </BaseText>
            </div>

            <div className={styles.Header_Image}>
              <Image
                src="/images/image/careers_image.png"
                layout="fill"
                alt={'Images'}
              />
            </div>
          </div>
        </BaseContainer>

        <Marquee className={styles.Marquee} speed={150} gradient={false}>
          <span className="MarqueeText MarqueeText_CareersHeader">
            WORK WITH US WORK WITH US WORK WITH US WORK WITH US&nbsp;WORK WITH
            US WORK WITH US WORK WITH US WORK WITH US&nbsp;WORK WITH US WORK
            WITH US WORK WITH US WORK WITH US&nbsp;
          </span>
        </Marquee>
      </div>
    </>
  );
};

export default CareersHeader;
