import React from 'react';
import styles from './CareerForm.module.scss';
import { BaseButton, BaseIcon, BaseInput, BaseTextarea } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { FileInput, PhoneInput } from '@content/index';
import { IValueCareerForm } from '@constants/globals/types';

const CareerForm = () => {
  const [value, setValue] = React.useState<IValueCareerForm>({
    name_surname: '',
    linkedin_profile: '',
    email: '',
    phone_number: '',
    question: '',
    files: [],
  });

  React.useEffect(() => {
    console.log('value.files: ', value.files);
  }, [value]);

  const setNewValue = (val: string | number | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <div className={styles.Form}>
        <div className={styles.Form_Row}>
          <BaseInput
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
            view="form"
            name="linkedin_profile"
            placeholder="Show us your LinkedIn (if applicable)"
            label="LINKEDIN PROFILE"
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
          placeholder="Tell in a few words about yourself and your interest in our company"
          label="TELL US ABOUT YOURSELF"
          type="text"
          value={value.question}
          onChange={(val: string) => setNewValue(val, 'question')}
          className={styles.Form_Textarea}
        />

        <FileInput
          files={value.files}
          onChange={(val: any[]) => setNewValue(val, 'files')}
        />

        <BaseButton className={styles.Form_Button}>
          <BaseIcon
            viewBox="0 0 31 24"
            icon={ALL_ICONS.ARROW_RIGHT}
            className={styles.Icon}
          />
        </BaseButton>
      </div>
    </>
  );
};

export default CareerForm;
