import { FC } from 'react';
import './Input.scss';
import { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type,
  required,
}) => {
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};
