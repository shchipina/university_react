import { PetFilter as PetFilterType } from '../../types/pet';
import './PetFilter.css';

interface PetFilterProps {
    currentFilter: PetFilterType;
    onFilterChange: (filter: PetFilterType) => void;
}

const PetFilter = ({ currentFilter, onFilterChange }: PetFilterProps) => {
    const filters: { value: PetFilterType; label: string; icon: string }[] = [
        { value: 'all', label: 'Всі', icon: '🐾' },
        { value: 'dog', label: 'Собаки', icon: '🐶' },
        { value: 'cat', label: 'Коти', icon: '🐱' },
    ];

    return (
        <div className="pet-filter">
            <h3 className="filter-title">Фільтр тварин:</h3>
            <div className="filter-buttons">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        className={`filter-button ${currentFilter === filter.value ? 'active' : ''}`}
                        onClick={() => onFilterChange(filter.value)}
                    >
                        <span className="filter-icon">{filter.icon}</span>
                        <span className="filter-label">{filter.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PetFilter;
