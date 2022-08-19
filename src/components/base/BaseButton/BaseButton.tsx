import { ALL_ICONS } from '@constants/icons';
import React, { ReactNode } from 'react';
import { BaseIcon } from '..';
import styles from './BaseButton.module.scss';

interface Props {
  children?: ReactNode | ReactNode[];
  title?: string;
  tooltip?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
  size?: string;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  style?: object;
}

const BaseButton: React.FC<Props> = ({
  title = '',
  children,
  onClick,
  size = '',
  type = 'default',
  disabled = false,
  className = '',
  loading = false,
  style,
  tooltip = '',
}) => {
  return (
    <button
      title={tooltip}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${styles.Button} ${styles['Button_' + type]}`}
      style={style}
    >
      {loading ? (
        <span className={styles.IconLoader}>
          <BaseIcon icon={ALL_ICONS.LOADING} viewBox="0 0 38 38" />
        </span>
      ) : (
        ''
      )}

      {children}
      <span className={`${styles.Title} ${styles['Title_' + size]}`}>
        {title}
      </span>
    </button>
  );
};

export default BaseButton;
