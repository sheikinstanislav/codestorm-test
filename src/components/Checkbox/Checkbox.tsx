import { FC } from 'react';
import './Checkbox.scss';
import { CheckboxTypes } from './Checkbox.types';

export const Checkbox: FC<CheckboxTypes> = ({
  label,
  id,
  checked,
  onChange,
}) => {
  return (
    <div className="check">
      <input
        id={id}
        onChange={onChange}
        className="check__input visually-hidden"
        checked={checked}
        type="checkbox"
      />
      <span className="check__box">
        <svg
          className="checkmark"
          stroke="#20df7f"
          fill="#20df7f"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="14px"
          width="14px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
        </svg>
      </span>
      <label className="check__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
