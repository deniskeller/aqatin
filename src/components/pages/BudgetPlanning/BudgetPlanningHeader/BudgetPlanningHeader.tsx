import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseText,
  BaseTitle,
} from '@base/index';
import React from 'react';
import styles from './BudgetPlanningHeader.module.scss';
import Image from 'next/image';
import { PaddingTop } from '@content/index';
import { ALL_ICONS } from '@constants/icons';

const BudgetPlanningHeader = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Overlay}></div>
        <BaseContainer>
          <PaddingTop />
          <div className={styles.Header}>
            <div className={styles.Header_Title}>
              <BaseTitle color="#fff">
                BUDGET <br /> PLANNING
              </BaseTitle>
            </div>

            <div className={styles.Header_Description}>
              <BaseText color="#fff">
                Use the budget planning option: you can set monthly limits on
                expenses and always keep your ears pressed.
              </BaseText>

              <div className={styles.Header_Description_IconArrow}>
                <BaseIcon
                  viewBox="0 0 118 114"
                  icon={ALL_ICONS.ARROW_TO_ACTION}
                />
              </div>
            </div>

            <div className={styles.Header_Shape}>
              <BaseText color="#E8E268">
                Control your finances!&nbsp;
                <span className={styles.Header_Shape_Icon}>
                  <Image
                    src="/images/icon/money_bag_icon.png"
                    layout="fill"
                    alt={'Images'}
                  />
                </span>
              </BaseText>
              <br />
              <br />
              <BaseText color="#fff">
                We will be glad to help you with this.
              </BaseText>

              <div className={styles.Header_Shape_IconArrow}>
                <BaseIcon
                  viewBox="0 0 118 114"
                  icon={ALL_ICONS.ARROW_TO_ACTION}
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default BudgetPlanningHeader;
