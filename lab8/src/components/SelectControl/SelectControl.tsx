import React, { useId } from 'react';

export type SelectOption = {
    value: string | number;
    label: string;
};

export type SelectControlProps = {
    options: SelectOption[];
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    label?: string;
    placeholder?: string;
    isRequired?: boolean;
    disabled?: boolean;
    error?: string;
    hint?: string;
    id?: string;
    name?: string;
    className?: string;
};

export default function SelectControl({
    options,
    value = '',
    onChange,
    label,
    placeholder = 'Оберіть варіант',
    isRequired = false,
    disabled = false,
    error,
    hint,
    id,
    name,
    className = '',
}: SelectControlProps) {
    const generatedId = useId();
    const selectId = id || generatedId;

    return (
        <div className={`flex flex-col gap-1.5 w-full ${className}`}>
            {label && (
                <label htmlFor={selectId} className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {label} {isRequired && <span className="text-red-500">*</span>}
                </label>
            )}

            <div className="relative flex w-full">
                <select
                    id={selectId}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={isRequired}
                    disabled={disabled}
                    className={`
                        w-full pl-3 pr-10 py-2 border rounded-lg shadow-sm text-sm appearance-none
                        bg-white dark:bg-gray-700
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                        disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed
                        transition-colors duration-200 cursor-pointer
                        ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600'}
                        ${value === '' ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'} 
                    `}
                >
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>

                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {error ? (
                <p className="text-sm text-red-500">{error}</p>
            ) : hint ? (
                <p className="text-sm text-gray-500 dark:text-gray-400">{hint}</p>
            ) : null}
        </div>
    );
}