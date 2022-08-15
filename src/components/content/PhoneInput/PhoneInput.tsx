import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './PhoneInput.module.scss';

interface Props {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  autocomplete?: string;
  error?: string | boolean;
  value: string;
  onChange(value: string | number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const PhoneInput2: React.FC<Props> = ({
  value,
  label,
  type,
  error,
  name,
  required = false,
  placeholder,
  className = '',
  autocomplete = 'off',
  onChange,
  onKeyDown,
}) => {
  return (
    <div className={`${styles.BaseInput} ${className}`}>
      {label ? <label className={styles.Label}>{label}</label> : ''}

      <PhoneInput
        placeholder={placeholder}
        country={'us'}
        value={value}
        onChange={onChange}
      />

      {error ? <div className={styles.ErrorText}>{error}</div> : ''}
    </div>
  );
};
export default PhoneInput2;
