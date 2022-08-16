import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseText,
  BaseTextarea,
  BaseTitle,
} from '@base/index';
import React from 'react';
import styles from './HelpCenter.module.scss';
import { PaddingTop, PhoneInput } from '@content/index';
import IValue from '@constants/globals/types';
import { ALL_ICONS } from '@constants/icons';
import Marquee from 'react-fast-marquee';

const HelpCenter = () => {
  const [value, setValue] = React.useState<IValue>({
    name_surname: '',
    linkedin_profile: '',
    email: '',
    phone_number: '',
    question: '',
  });

  React.useEffect(() => {
    console.log('default: ', value);
  }, [value]);

  const setNewValue = (val: string | number, key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Overlay}></div>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.HelpCenter}>
            <div className={styles.HelpCenter_Title}>
              <BaseTitle color="#fff">HELP CENTEr</BaseTitle>
            </div>

            <BaseText color="#fff">
              Ask any questions and we will answer it promptly
            </BaseText>

            <div className={styles.Form}>
              <div className={styles.Form_Row}>
                <BaseInput
                  error="Some error text"
                  view="form"
                  name="name_surname"
                  placeholder="Enter your name and surname"
                  label="NAME SURNAME"
                  type="text"
                  value={value.name_surname}
                  onChange={(val: string) => setNewValue(val, 'name_surname')}
                  className={styles.Form_Input}
                />

                <BaseInput
                  error
                  view="form"
                  name="linkedin_profile"
                  placeholder="Show us your LinkedIn (if applicable)"
                  label="LINKEDIN PROFILE"
                  type="text"
                  value={value.linkedin_profile}
                  onChange={(val: string) =>
                    setNewValue(val, 'linkedin_profile')
                  }
                  className={styles.Form_Input}
                />
              </div>

              <div className={styles.Form_Row}>
                <BaseInput
                  view="form"
                  name="email"
                  placeholder="Enter your email"
                  label="EMAIL"
                  type="text"
                  value={value.email}
                  onChange={(val: string) => setNewValue(val, 'email')}
                  className={styles.Form_Input}
                />

                <PhoneInput
                  label="PHONE NUMBER"
                  placeholder="Phone number"
                  value={value.phone_number}
                  onChange={(val: string) => setNewValue(val, 'phone_number')}
                  className={styles.Form_Input}
                />
              </div>

              <BaseTextarea
                view="form"
                name="question"
                placeholder="Tell in a few words about yourself and your interest in our company"
                label="TELL US ABOUT YOURSELF"
                type="text"
                value={value.question}
                onChange={(val: string) => setNewValue(val, 'question')}
                className={styles.Form_Textarea}
              />

              <BaseButton className={styles.Form_Button}>
                <BaseIcon
                  viewBox="0 0 31 24"
                  icon={ALL_ICONS.ARROW_RIGHT}
                  className={styles.Icon}
                />
              </BaseButton>
            </div>

            <BaseText color="#fff">
              Please feel free to contact us by this email&nbsp;
              <a href="mailto:info@aqatin.com">
                <span className={styles.HelpCenter_Mailto}>
                  info@aqatin.com
                </span>
              </a>
            </BaseText>
          </div>
        </BaseContainer>

        <Marquee className={styles.Marquee} speed={150} gradient={false}>
          <span className="MarqueeText MarqueeText_HelpCenter">
            HELP CENTER HELP CENTER HELP CENTER HELP CENTER&nbsp;HELP CENTER
            HELP CENTER HELP CENTER HELP CENTER&nbsp;
          </span>
        </Marquee>
      </div>
    </>
  );
};

export default HelpCenter;
