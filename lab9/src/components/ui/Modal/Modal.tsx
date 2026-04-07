import { useEffect, useState, useCallback } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { clsx } from '../../../utils/clsx';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ModalVariant = 'default' | 'danger' | 'success';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: ModalSize;
  variant?: ModalVariant;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

export interface ModalHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  children?: ReactNode;
}

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  noPadding?: boolean;
}

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  align?: 'start' | 'center' | 'end' | 'spaceBetween';
}

export function Modal({
  open,
  onClose,
  children,
  size = 'md',
  variant = 'default',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className,
}: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  }, [onClose]);

  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, closeOnEscape, handleClose]);

  useEffect(() => {
    if (open) {
      document.body.classList.add('modalOpen');
    } else {
      document.body.classList.remove('modalOpen');
    }

    return () => {
      document.body.classList.remove('modalOpen');
    };
  }, [open]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!open) return null;

  const modalClasses = clsx(
    styles.modal,
    styles[size],
    variant !== 'default' && styles[variant],
    {
      [styles.modalClosing]: isClosing,
    },
    className
  );

  const overlayClasses = clsx(styles.overlay, {
    [styles.overlayClosing]: isClosing,
  });

  return createPortal(
    <div className={overlayClasses} onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className={modalClasses}>
        {children}

        {showCloseButton && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Закрити"
            style={{ position: 'absolute', top: 'var(--spacing-4)', right: 'var(--spacing-4)' }}
          >
            ×
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}

export function ModalHeader({ title, children, className, ...rest }: ModalHeaderProps) {
  return (
    <div className={clsx(styles.header, className)} {...rest}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  );
}

export function ModalBody({ children, noPadding = false, className, ...rest }: ModalBodyProps) {
  return (
    <div
      className={clsx(styles.body, { [styles.bodyNoPadding]: noPadding }, className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function ModalFooter({
  children,
  align = 'end',
  className,
  ...rest
}: ModalFooterProps) {
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

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
