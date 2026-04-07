import { useEffect } from 'react';

type ToastProps = {
    message: string;
    type?: 'success' | 'error' | 'info';
    onClose: () => void;
    duration?: number;
};

export default function Toast({ message, type = 'success', onClose, duration = 3000 }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const bgColor = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
    }[type];

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
            <div
                className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-75`}
            >
                <p className="flex-1 font-medium">{message}</p>
                <button
                    onClick={onClose}
                    className="text-white hover:text-gray-200 font-bold text-xl"
                    aria-label="Закрити"
                >
                    ×
                </button>
            </div>
        </div>
    );
}
