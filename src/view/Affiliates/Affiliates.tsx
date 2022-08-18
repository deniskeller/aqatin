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
import styles from './Affiliates.module.scss';
import { PaddingTop, PhoneInput, SuccessFormAlert } from '@content/index';
import { ALL_ICONS } from '@constants/icons';
import Image from 'next/image';
import { IValue } from '@constants/globals/types';

const Affiliates = () => {
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

  const [success, setSuccess] = React.useState<boolean>(false);

  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Affiliates}>
            <div className={styles.Affiliates_Title}>
              <BaseTitle color="#fff">Affiliates</BaseTitle>
            </div>

            <div className={styles.Affiliates_Description}>
              <BaseText color="#fff">
                Develop the best accounts and share the most useful information
                about finances together with us!&nbsp;
                <span className={styles.Affiliates_Description_Icon}>
                  <Image
                    src="/images/icon/flexed-biceps.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </span>
                &nbsp;Whether you are a blogger or a writer. Join the Aqatin
                affiliate program and get rewarded for promoting our accounts
                among your audience.&nbsp;
                <span className={styles.Affiliates_Description_Icon}>
                  <Image
                    src="/images/icon/fireworks.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </span>
              </BaseText>
            </div>

            <div className={styles.Affiliates_Image}>
              <Image
                src="/images/image/affiliates_image.png"
                layout="fill"
                alt={'Images'}
              />
            </div>

            <div className={styles.Form}>
              {!success ? (
                <div style={{ opacity: !success ? '1' : '0' }}>
                  <div className={styles.Form_Row}>
                    <BaseInput
                      view="form"
                      name="name_surname"
                      placeholder="Enter your name and surname"
                      label="NAME SURNAME"
                      type="text"
                      value={value.name_surname}
                      onChange={(val: string) =>
                        setNewValue(val, 'name_surname')
                      }
                      className={styles.Form_Input}
                    />

                    <BaseInput
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
                      onChange={(val: string) =>
                        setNewValue(val, 'phone_number')
                      }
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

                  <BaseButton
                    className={styles.Form_Button}
                    onClick={() => setSuccess(true)}
                  >
                    <BaseIcon
                      viewBox="0 0 31 24"
                      icon={ALL_ICONS.ARROW_RIGHT}
                      className={styles.Icon}
                    />
                  </BaseButton>
                </div>
              ) : (
                <>
                  <SuccessFormAlert success={success} />
                </>
              )}
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Affiliates;
