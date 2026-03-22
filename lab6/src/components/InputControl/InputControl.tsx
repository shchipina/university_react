import React, { useId } from 'react';

export type InputControlProps = {
    value?: string;
    type?: React.HTMLInputTypeAttribute;
    maxLength?: number;
    minLength?: number;
    isRequired?: boolean;
    placeholder?: string;
    hint?: string;
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    id?: string;
    showClearButton?: boolean;
    pattern?: string;
    disabled?: boolean;
    name?: string;
    error?: string;
    className?: string;
};

export default function InputControl({
    value = '',
    type = 'text',
    maxLength,
    minLength,
    isRequired = false,
    placeholder,
    hint,
    label,
    onChange,
    onClear,
    id,
    showClearButton = false,
    pattern,
    disabled = false,
    name,
    error,
    className = '',
}: InputControlProps) {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <div className={`flex flex-col gap-1.5 w-full ${className}`}>
            {label && (
                <label htmlFor={inputId} className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {label} {isRequired && <span className="text-red-500">*</span>}
                </label>
            )}

            <div className="relative flex items-center">
                <input
                    id={inputId}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    minLength={minLength}
                    required={isRequired}
                    pattern={pattern}
                    disabled={disabled}
                    className={`
                        w-full px-3 py-2 border rounded-lg shadow-sm text-sm
                        bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                        placeholder:text-gray-400 dark:placeholder:text-gray-500
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                        disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed
                        transition-colors duration-200
                        ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600'}
                        ${showClearButton ? 'pr-10' : ''} 
                    `}
                />

                {showClearButton && value.length > 0 && !disabled && (
                    <button
                        type="button"
                        onClick={onClear}
                        className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                        aria-label="Очистити поле"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>

            {error ? (
                <p className="text-sm text-red-500">{error}</p>
            ) : hint ? (
                <p className="text-sm text-gray-500 dark:text-gray-400">{hint}</p>
            ) : null}
        </div>
    );
}