//@ts-nocheck
import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseTitle,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Image from 'next/image';
import React from 'react';
import styles from './Header.module.scss';
import { Animated } from 'react-animated-css';

const Header = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <>
      <BaseContainer>
        <div className={styles.Padding_Top}></div>

        <Animated
          animationIn="fadeIn"
          animationInDuration={1000}
          isVisible={true}
        >
          <div className={styles.Header}>
            <div className={styles.Header_Logo}>
              <BaseIcon
                viewBox="0 0 209 56"
                icon={ALL_ICONS.LOGO}
                className={styles.Icon}
              />
            </div>
            <div className={styles.Header_Title}>
              <BaseTitle>
                We are connecting both of your passions: <br />
                <span>money and sport</span>
              </BaseTitle>
            </div>
          </div>
        </Animated>

        <Animated
          animationIn="fadeInRight"
          isVisible={true}
          animationInDelay={200}
        >
          <div className={styles.Subtitle}>
            <h2>Create an account and control your finances</h2>
          </div>
        </Animated>

        <div className={styles.Content}>
          <Animated
            animationIn="fadeIn"
            animationInDelay={5000}
            isVisible={true}
          >
            <div className={styles.Content_Logo_Icon}>
              <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
            </div>
          </Animated>

          <Animated
            animationIn="fadeIn"
            animationInDelay={15000}
            isVisible={true}
          >
            <div className={styles.Content_Logo_Text}>
              <p>Pre-register now</p>
            </div>
          </Animated>

          <Animated
            animationIn="fadeIn"
            animationInDelay={25000}
            isVisible={true}
          >
            <div className={styles.Content_Description}>
              <p>
                Enter your email and you will be the first who will get all the
                updates and information about our upcoming launch
              </p>
            </div>

            <div className={styles.Content_Form}>
              <BaseInput
                name="mail"
                placeholder="hello@yourmail.com"
                type="mail"
                value={value}
                onChange={(val: string) => setValue(val)}
                className={styles.Content_Form_Input}
              />
              <BaseButton
                title="Let’s go!"
                className={styles.Content_Form_Button}
              />
            </div>
          </Animated>
        </div>
      </BaseContainer>

      <Animated
        animationIn="fadeIn"
        animationInDelay={400}
        isVisible={true}
        animationInDuration={3000}
      >
        <div className={styles.Partners}>
          <div className={styles.Partners_Title}>
            <p>Registered & Operating at the UK, Ireland and Canada</p>
          </div>
          <div className={styles.Partners_Items}>
            <div className={`${styles.Item} ${styles.Companies_house}`}>
              <Image
                src="/images/icon/companies_house.png"
                layout="fill"
                alt={'Companies images'}
              />
            </div>
            <div className={`${styles.Item} ${styles.Revenue_and_customs}`}>
              <Image
                src="/images/icon/revenue_and_customs.png"
                layout="fill"
                alt={'Companies images'}
              />
            </div>
            <div className={`${styles.Item} ${styles.Fca}`}>
              <Image
                src="/images/icon/fca.png"
                layout="fill"
                alt={'Companies images'}
              />
            </div>
            <div className={`${styles.Item} ${styles.Bank_of_ireland}`}>
              <Image
                src="/images/icon/bank_of_ireland.png"
                layout="fill"
                alt={'Companies images'}
              />
            </div>
            <div className={`${styles.Item} ${styles.Canada}`}>
              <Image
                src="/images/icon/canada.png"
                layout="fill"
                alt={'Companies images'}
              />
            </div>
          </div>
        </div>
      </Animated>
    </>
  );
};

export default Header;
