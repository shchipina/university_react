import type { FilterMode } from '../../App';

type FilterBarProps = {
    filterMode: FilterMode;
    onFilterChange: (mode: FilterMode) => void;
    selectedType: string;
    onTypeChange: (type: string) => void;
    availableTypes: string[];
    totalCount: number;
    filteredCount: number;
};

export default function FilterBar({
    filterMode,
    onFilterChange,
    selectedType,
    onTypeChange,
    availableTypes,
    totalCount,
    filteredCount,
}: FilterBarProps) {
    const filters: { value: FilterMode; label: string; }[] = [
        { value: 'all', label: 'Усі'},
        { value: 'favorites', label: 'Улюблені' },
        { value: 'vaccinated', label: 'Вакциновані' },
    ];

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex flex-col gap-4">
                <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                        Фільтр за статусом
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => onFilterChange(filter.value)}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${filterMode === filter.value
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {availableTypes.length > 0 && (
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                            Фільтр за видом
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => onTypeChange('all')}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all capitalize ${selectedType === 'all'
                                        ? 'bg-green-600 text-white shadow-md'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                            >
                                Усі види
                            </button>
                            {availableTypes.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => onTypeChange(type)}
                                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all capitalize ${selectedType === type
                                            ? 'bg-green-600 text-white shadow-md'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Показано <span className="font-bold text-blue-600 dark:text-blue-400">{filteredCount}</span> з{' '}
                        <span className="font-bold">{totalCount}</span> тваринок
                    </p>
                </div>
            </div>
        </div>
    );
}
