import { BaseIcon, BaseText } from '@base/index';
import React from 'react';
import styles from './Description.module.scss';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';

const Description = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Shape}>
          <p>
            It doesn't matter if you write posts and shoot videos on Instagram
            or post on your own blog how you use the Aqatin card. We will accept
            your help and reward you.
          </p>
        </div>

        <div className={styles.IconHeart}>
          <Image
            src="/images/icon/yellow-heart.png"
            layout="fill"
            alt={'Images'}
          />
        </div>

        <div className={styles.Description}>
          <BaseText color="#E8E268">
            We will thank you for your support for sure! You will get access to
            exclusive events and annual free use of any of our packages.
          </BaseText>
        </div>

        <div className={styles.IconArrow}>
          <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.ARROW_TO_ACTION} />
        </div>
      </div>
    </>
  );
};

export default Description;
