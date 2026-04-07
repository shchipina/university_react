import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import styles from './Input.module.css';
import { clsx } from '../../../utils/clsx';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'error' | 'success';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
  size?: InputSize;
  state?: InputState;
  error?: string;
  success?: string;
  helperText?: string;
  required?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      disabled = false,
      size = 'md',
      state = 'default',
      error,
      success,
      helperText,
      required = false,
      iconLeft,
      iconRight,
      fullWidth = true,
      wrapperClassName,
      className,
      ...rest
    },
    ref
  ) => {
    const inputState = error ? 'error' : success ? 'success' : state;

    const inputClasses = clsx(
      styles.input,
      styles[size],
      {
        [styles.error]: inputState === 'error',
        [styles.success]: inputState === 'success',
        [styles.inputWithIcon]: iconLeft,
        [styles.inputWithIconRight]: iconRight,
        [styles.fullWidth]: fullWidth,
      },
      className
    );

    const wrapperClasses = clsx(
      styles.inputWrapper,
      {
        [styles.fullWidth]: fullWidth,
      },
      wrapperClassName
    );

    const hasIcons = iconLeft || iconRight;

    return (
      <div className={wrapperClasses}>
        {label && (
          <label className={clsx(styles.label, { [styles.required]: required })}>
            {label}
          </label>
        )}

        {hasIcons ? (
          <div className={styles.inputGroup}>
            {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}

            <input
              ref={ref}
              className={inputClasses}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              {...rest}
            />

            {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
          </div>
        ) : (
          <input
            ref={ref}
            className={inputClasses}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            {...rest}
          />
        )}

        {error && (
          <p className={styles.errorMessage}>
            {error}
          </p>
        )}

        {!error && success && (
          <p className={styles.successMessage}>
            ✓ {success}
          </p>
        )}

        {!error && !success && helperText && (
          <p className={styles.helperText}>{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
