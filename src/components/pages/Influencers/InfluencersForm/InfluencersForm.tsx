import {
  BaseButton,
  BaseIcon,
  BaseInput,
  BaseText,
  BaseTextarea,
  BaseTitle,
} from '@base/index';
import React from 'react';
import styles from './InfluencersForm.module.scss';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';
import { PhoneInput } from '@content/index';
import { IValue } from '@constants/globals/types';

const InfluencersForm = () => {
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
        <div className={styles.ImageContent}>
          <div className={styles.Overlay}></div>
        </div>

        <div className={styles.FormContent}>
          <div className={styles.FormContent_Title}>
            <BaseTitle color="#E8E268">APPLY FOR GETTING REWARDS</BaseTitle>
          </div>

          <div className={styles.Form}>
            <div className={styles.Form_Row}>
              <BaseInput
                view="form"
                name="name_surname"
                placeholder="Enter your first name"
                label="FIRST NAME"
                type="text"
                value={value.name_surname}
                onChange={(val: string) => setNewValue(val, 'name_surname')}
                className={styles.Form_Input}
              />

              <BaseInput
                view="form"
                name="linkedin_profile"
                placeholder="Enter your last name"
                label="LAST NAME"
                type="text"
                value={value.linkedin_profile}
                onChange={(val: string) => setNewValue(val, 'linkedin_profile')}
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
                placeholder="Enter your phone number"
                value={value.phone_number}
                onChange={(val: string) => setNewValue(val, 'phone_number')}
                className={styles.Form_Input}
              />
            </div>

            <BaseTextarea
              view="form"
              name="question"
              placeholder="A brief description here about yourself and your social networks"
              label="APPLY"
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
        </div>
      </div>
    </>
  );
};

export default InfluencersForm;
