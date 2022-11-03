import { FC } from 'react';
import './Button.scss';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ text, onClick, type }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {text}
    </button>
  );
};
