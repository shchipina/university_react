import type { Pet } from '../../App';
import CardComponent from '../CardComponent/CardComponent';

type GalleryComponentProps = {
    pets: Pet[];
    onDelete: (id: string) => void;
    onToggleFavorite: (id: string) => void;
};

export default function GalleryComponent({ pets, onDelete, onToggleFavorite }: GalleryComponentProps) {
    if (pets.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 text-center shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center h-full min-h-[400px] transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Галерея порожня</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Додайте свого першого улюбленця через форму зліва!</p>
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