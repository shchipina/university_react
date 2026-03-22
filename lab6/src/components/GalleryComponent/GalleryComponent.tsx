import type { Pet } from '../../App';
import type { FilterMode } from '../../App';
import CardComponent from '../CardComponent/CardComponent';

type GalleryComponentProps = {
    pets: Pet[];
    onDelete: (id: string) => void;
    onToggleFavorite: (id: string) => void;
    filterMode: FilterMode;
    selectedType: string;
};

export default function GalleryComponent({
    pets,
    onDelete,
    onToggleFavorite,
    filterMode,
    selectedType,
}: GalleryComponentProps) {
    if (pets.length === 0) {
        let emptyMessage = 'Додайте свого першого улюбленця через форму зліва!';

        if (filterMode === 'favorites') {
            emptyMessage = 'У вас ще немає улюблених тваринок. Натисніть ❤️ на картці, щоб додати!';
        } else if (filterMode === 'vaccinated') {
            emptyMessage = 'Немає вакцинованих тваринок у вашій галереї';
        } else if (selectedType !== 'all') {
            emptyMessage = `Немає тваринок типу "${selectedType}" у вашій галереї`;
        }

        return (
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 text-center shadow-sm border border-gray-100 dark:border-gray-700 min-h-[400px] flex flex-col items-center justify-center transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    {filterMode === 'all' && selectedType === 'all' ? 'Галерея порожня' : 'Нічого не знайдено'}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {pets.map((pet) => (
                <CardComponent
                    key={pet.id}
                    pet={pet}
                    onDelete={onDelete}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
}