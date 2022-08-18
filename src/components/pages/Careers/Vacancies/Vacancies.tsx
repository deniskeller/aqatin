import React from 'react';
import styles from './Vacancies.module.scss';
import Image from 'next/image';
import { BaseContainer, BaseTitle } from '@base/index';
import { AccordionCareerItem } from '@content/index';
import { CareerForm } from 'components/forms';

const Vacancies = () => {
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
                    <CareerForm />
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
