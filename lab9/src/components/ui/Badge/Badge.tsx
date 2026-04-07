import type { ReactNode, HTMLAttributes } from 'react';
import styles from './Badge.module.css';
import { clsx } from '../../../utils/clsx';

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'outlined-primary'
  | 'outlined-secondary'
  | 'outlined-success'
  | 'outlined-danger'
  | 'outlined-warning'
  | 'outlined-info'
  | 'soft-primary'
  | 'soft-success'
  | 'soft-danger'
  | 'soft-warning'
  | 'soft-info';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: ReactNode;
  icon?: ReactNode;
  dot?: boolean;
  onRemove?: () => void;
}

export function Badge({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  dot = false,
  onRemove,
  className,
  ...rest
}: BadgeProps) {
  const variantClass = variant.includes('-')
    ? styles[variant.split('-').map((s, i) => i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join('')]
    : styles[variant];

  const badgeClasses = clsx(
    styles.badge,
    variantClass,
    styles[size],
    {
      [styles.withIcon]: icon || dot,
    },
    className
  );

  return (
    <span className={badgeClasses} {...rest}>
      {dot && <span className={styles.dot} />}
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
      {onRemove && (
        <button
          type="button"
          className={styles.removeButton}
          onClick={onRemove}
          aria-label="Видалити"
        >
          ×
        </button>
      )}
    </span>
  );
}

export default Badge;
