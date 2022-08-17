import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseTextarea,
  BaseTitle,
} from '@base/index';
import IValue from '@constants/globals/types';
import { ALL_ICONS } from '@constants/icons';
import { AccordionCareerItem, PhoneInput } from '@content/index';
import Image from 'next/image';
import React from 'react';
import styles from './Vacancies.module.scss';

const Vacancies = () => {
  const [value, setValue] = React.useState<IValue>({
    name_surname: '',
    linkedin_profile: '',
    email: '',
    phone_number: '',
    question: '',
  });

  React.useEffect(() => {
    // console.log('default: ', value);
  }, [value]);

  const setNewValue = (val: string | number, key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Vacancies}>
            <div className={styles.Vacancies_Title}>
              <BaseTitle type="h2" color="#fff">
                CAREERS
              </BaseTitle>
            </div>

            <div className={styles.Header_Accordions}>
              <AccordionCareerItem title="Copywriter">
                <div className={styles.CareerItem}>
                  <div className={styles.CareerItemRow}>
                    <div className={styles.CareerItemName}>
                      <div className={styles.RowTitle}>About the role</div>
                      <div className={styles.RowImage}>
                        <Image
                          src="/images/icon/magnifying-glass.png"
                          layout="fill"
                          alt={'Careers'}
                        />
                      </div>
                    </div>
                    <div className={styles.CareerItemDiscription}>
                      <p className={styles.Paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam vitae laoreet odio. Phasellus suscipit tincidunt
                        enim, et volutpat risus commodo et. Ut cursus laoreet
                        massa, vitae malesuada enim iaculis ut. Pellentesque sed
                        nisl ultrices, tincidunt ante finibus, rutrum diam. Ut
                        non euismod turpis. Aenean eros orci, interdum ut
                        consequat nec, aliquam non justo.
                      </p>
                    </div>
                  </div>

                  <div className={styles.CareerItemRow}>
                    <div className={styles.CareerItemName}>
                      <div className={styles.RowTitle}>
                        What you’ll be doing
                      </div>
                      <div className={styles.RowImage}>
                        <Image
                          src="/images/icon/technologist.png"
                          layout="fill"
                          alt={'Careers'}
                        />
                      </div>
                    </div>
                    <div className={styles.CareerItemDiscription}>
                      <ul className={styles.List}>
                        <li>
                          Delivering high quality copy adapted in target
                          language and ensuring that daily volume expectation
                          are met
                        </li>
                        <li>
                          Adapting long term strategic brand tone vision to
                          local markets culture differences and perceptions
                        </li>
                        <li>
                          Contributing to and suggest long-term strategic
                          content projects
                        </li>
                        <li>
                          Contributing to live updates in respective languages
                          of the brand tone of voice and strategic messaging
                          that aligns to wider company goals
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.CareerItemRow}>
                    <div className={styles.CareerItemName}>
                      <div className={styles.RowTitle}>What you'll need</div>
                      <div className={styles.RowImage}>
                        <Image
                          src="/images/icon/card-file-box.png"
                          layout="fill"
                          alt={'Careers'}
                        />
                      </div>
                    </div>
                    <div className={styles.CareerItemDiscription}>
                      <ul className={styles.List}>
                        <li>
                          Delivering high quality copy adapted in target
                          language and ensuring that daily volume expectation
                          are met
                        </li>
                        <li>
                          Adapting long term strategic brand tone vision to
                          local markets culture differences and perceptions
                        </li>
                        <li>
                          Contributing to and suggest long-term strategic
                          content projects
                        </li>
                        <li>
                          Contributing to live updates in respective languages
                          of the brand tone of voice and strategic messaging
                          that aligns to wider company goals
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.CareerItemApply}>
                    <div className={styles.CareerItemApplyTitle}>
                      Apply for this role!
                    </div>
                    <div className={styles.CareerItemApplyImage}>
                      <Image
                        src="/images/icon/person-raising-hand.png"
                        layout="fill"
                        alt={'Careers'}
                      />
                    </div>
                  </div>

                  <div className={styles.CareerItem_Form}>
                    <div className={styles.Form}>
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
                          placeholder="Enter your phone number"
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
              </AccordionCareerItem>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Vacancies;
