import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';
import { clsx } from '../../../utils/clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  fullWidth = false,
  loading = false,
  type = 'button',
  className,
  ...rest
}: ButtonProps) {
  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.disabled]: disabled || loading,
      [styles.fullWidth]: fullWidth,
      [styles.loading]: loading,
    },
    className
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      {...rest}
    >
      {!loading && children}
    </button>
  );
}

export default Button;
