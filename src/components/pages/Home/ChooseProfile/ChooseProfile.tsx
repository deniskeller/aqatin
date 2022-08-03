import { BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import styles from './ChooseProfile.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ChooseProfile = () => {
  const str = 'AT THE AQATIN PLATFORM YOU CAN CHOOSE THE PROFILE TO WORK WITH:';
  const delay = 20;
  const [text, setText] = React.useState<string>('');
  const [click, setClick] = React.useState(false);

  React.useEffect(() => {
    const interval = setTimeout(() => {
      if (text.length < str.length) {
        setText(str.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(interval);
  }, [text, click]);

  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.ChooseProfile}>
            <div className={styles.Title}>
              <p>{text}</p>
            </div>
            {/* <button onClick={() => setClick(true)}>кнопка</button> */}

            <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
              <div className={styles.IconArrow}>
                <BaseIcon viewBox="0 0 114 46" icon={ALL_ICONS.ARROW_DOWN} />
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn animate__delay-2s">
              <div className={styles.IconStar}>
                <BaseIcon viewBox="0 0 118 114" icon={ALL_ICONS.STAR} />
              </div>
            </AnimationOnScroll>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default ChooseProfile;
