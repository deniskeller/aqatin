import { BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import styles from './ChooseProfile.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Waypoint } from 'react-waypoint';

const ChooseProfile = () => {
  const str = 'AT THE AQATIN PLATFORM YOU CAN CHOOSE THE PROFILE TO WORK WITH:';
  const delay = 0.5;
  const [text, setText] = React.useState<string>('');
  const [click, setClick] = React.useState(false);

  React.useEffect(() => {
    const interval = setTimeout(() => {
      if (text.length < str.length && click) {
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
            <Waypoint
              onEnter={() => setClick(true)}
              onLeave={() => setClick(false)}
            >
              <div className={styles.Title}>
                <p>{text}</p>
              </div>
            </Waypoint>
            {/* <button onClick={() => setClick(true)}>кнопка</button> */}

            <AnimationOnScroll
              animateIn="animate__fadeIn animate__delay-1s"
              animateOnce
            >
              <div className={styles.IconArrow}>
                <BaseIcon viewBox="0 0 114 46" icon={ALL_ICONS.ARROW_DOWN} />
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__fadeIn animate__delay-2s"
              animateOnce
            >
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
