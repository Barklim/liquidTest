import React from 'react';
import cls from 'classnames';

import styles from './CustomInput.module.scss';

const Input = ({
  inputName = '',
  inputPlaceholder = '',
  inputType = '',
  inputClass = '',
  inputValue = '',
  inputDisable = false,
  isError = false,
  inputAutocomplete = '',
  inputDefaultValue = '',
  inputLabel,
  inputRef,
  onChange,
  onKeyPress,
}) => {
  if (inputType === 'textarea') {
    return (
      <textarea
        id={`${inputName}-input `}
        name={inputName}
        onChange={onChange}
        onKeyPress={onKeyPress}
        defaultValue={inputDefaultValue}
        className={styles.textarea}
        type={inputType}
        placeholder={inputPlaceholder}
        autoComplete={inputAutocomplete}
        disabled={inputDisable}
        ref={inputRef}
      />
    );
  } else {
    return (
      <div className={styles.input_wrapper}>
        {inputLabel && (
          <label className="input-label" htmlFor={`${inputName}-input `}>
            {inputLabel}
          </label>
        )}
        <input
          id={`${inputName}-input `}
          name={inputName}
          onChange={onChange}
          onKeyPress={onKeyPress}
          defaultValue={inputDefaultValue}
          className={cls([styles.input, inputClass])}
          type={inputType}
          placeholder={inputPlaceholder}
          autoComplete={inputAutocomplete}
          disabled={inputDisable}
          ref={inputRef}
        />
      </div>
    );
  }
};

export default Input;
