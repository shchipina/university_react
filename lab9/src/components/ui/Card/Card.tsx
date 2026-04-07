import type { ReactNode, HTMLAttributes } from 'react';
import styles from './Card.module.css';
import { clsx } from '../../../utils/clsx';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'flat';
export type CardSize = 'sm' | 'md' | 'lg' | 'fullWidth';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  size?: CardSize;
  children: ReactNode;
  interactive?: boolean;
}

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  dren: ReactNode;
  padding?: 'compact' | 'default' | 'spacious';
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  align?: 'start' | 'center' | 'end' | 'spaceBetween';
}

export interface CardMediaProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  position?: 'top';
}

export function Card({
  variant = 'default',
  size = 'md',
  children,
  interactive = false,
  className,
  ...rest
}: CardProps) {
  const cardClasses = clsx(
    styles.card,
    variant !== 'default' && styles[variant],
    styles[size],
    {
      [styles.interactive]: interactive,
    },
    className
  );

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
  children,
  className,
  ...rest
}: CardHeaderProps) {
  return (
    <div className={clsx(styles.header, className)} {...rest}>
      {title && <h3 className={styles.headerTitle}>{title}</h3>}
      {subtitle && <p className={styles.headerSubtitle}>{subtitle}</p>}
      {children}
    </div>
  );
}

export function CardBody({
  children,
  padding = 'default',
  className,
  ...rest
}: CardBodyProps) {
  const bodyClasses = clsx(
    styles.body,
    {
      [styles.bodyCompact]: padding === 'compact',
      [styles.bodySpacious]: padding === 'spacious',
    },
    className
  );

  return (
    <div className={bodyClasses} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  align = 'end',
  className,
  ...rest
}: CardFooterProps) {
  const footerClasses = clsx(
    styles.footer,
    {
      [styles.footerStart]: align === 'start',
      [styles.footerCenter]: align === 'center',
      [styles.footerSpaceBetween]: align === 'spaceBetween',
    },
    className
  );

  return (
    <div className={footerClasses} {...rest}>
      {children}
    </div>
  );
}

export function CardMedia({
  src,
  alt,
  position = 'top',
  className,
  ...rest
}: CardMediaProps) {
  const mediaContainerClasses = clsx(
    styles.mediaContainer,
    {
      [styles.mediaTop]: position === 'top',
    }
  );

  return (
    <div className={mediaContainerClasses} {...rest}>
      <img src={src} alt={alt} className={clsx(styles.media, className)} />
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Media = CardMedia;

export default Card;
