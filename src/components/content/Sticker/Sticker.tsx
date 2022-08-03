import React from 'react';
import styles from './Sticker.module.scss';

interface Props {
  className?: string;
  children?: ReactNode;
  color?: string;
  background?: string;
}

const Sticker: React.FC<Props> = ({
  children,
  color = '#000000',
  background = '#E1F665',
  className = '',
}) => {
  return (
    <>
      <div
        className={`${styles.Sticker} ${className}`}
        style={{ background: background }}
      >
        <div className={styles.Sticker_Title} style={{ color: color }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Sticker;
