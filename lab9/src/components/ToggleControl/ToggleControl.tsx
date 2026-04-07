import React, { useId } from 'react';

export type ToggleSize = 'sm' | 'md' | 'lg';

export type ToggleControlProps = {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    description?: string;
    size?: ToggleSize;
    disabled?: boolean;
    id?: string;
    name?: string;
    className?: string;
};

export default function ToggleControl({
    checked,
    onChange,
    label,
    description,
    size = 'md',
    disabled = false,
    id,
    name,
    className = '',
}: ToggleControlProps) {
    const generatedId = useId();
    const toggleId = id || generatedId;

    const sizeClasses = {
        sm: {
            track: 'w-8 h-4',
            thumb: 'w-3 h-3 top-0.5 left-0.5',
            translate: 'translate-x-4',
        },
        md: {
            track: 'w-11 h-6',
            thumb: 'w-5 h-5 top-0.5 left-0.5',
            translate: 'translate-x-5',
        },
        lg: {
            track: 'w-14 h-8',
            thumb: 'w-7 h-7 top-0.5 left-0.5',
            translate: 'translate-x-6',
        },
    };

    return (
        <div className={`flex items-start ${className}`}>
            <label
                htmlFor={toggleId}
                className={`relative inline-flex items-center shrink-0 ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
            >
                <input
                    type="checkbox"
                    id={toggleId}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    className="sr-only peer"
                />

                <div className={`
                    rounded-full transition-colors duration-200 ease-in-out
                    peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2
                    ${checked ? 'bg-blue-600' : 'bg-gray-200'}
                    ${sizeClasses[size].track}
                `}>
                    <span className={`
                        absolute bg-white rounded-full shadow-sm transform transition-transform duration-200 ease-in-out
                        ${sizeClasses[size].thumb}
                        ${checked ? sizeClasses[size].translate : 'translate-x-0'}
                    `} />
                </div>
            </label>

            {(label || description) && (
                <div className="ml-3 flex flex-col">
                    {label && (
                        <label
                            htmlFor={toggleId}
                            className={`text-sm font-medium ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900 dark:text-white cursor-pointer'}`}
                        >
                            {label}
                        </label>
                    )}
                    {description && (
                        <p className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                            {description}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}