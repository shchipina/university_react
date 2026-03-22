import type { Pet } from '../../App';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

type PetCardProps = {
    pet: Pet;
    onDelete: (id: string) => void;
    onToggleFavorite: (id: string) => void;
};

export default function CardComponent({ pet, onDelete, onToggleFavorite }: PetCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 relative flex flex-col h-full">
            <FavoriteButton
                isFavorite={pet.isFavorite}
                onClick={() => onToggleFavorite(pet.id)}
                className="absolute top-4 right-4"
            />

            <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white pr-8">{pet.name}</h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 capitalize">{pet.type}</p>
            </div>

            <div className="flex-1 space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <p><span className="font-semibold text-gray-700 dark:text-gray-200">Вік:</span> {pet.age || 'Невідомо'}</p>
                <p><span className="font-semibold text-gray-700 dark:text-gray-200">Щеплення:</span> {pet.isVaccinated ? '✅ Є' : '❌ Немає'}</p>
                {pet.description && (
                    <p className="mt-2 text-gray-500 dark:text-gray-400 italic line-clamp-3">"{pet.description}"</p>
                )}
            </div>

            <div className="mt-auto">
                <ButtonComponent
                    variant="danger"
                    size="sm"
                    fullWidth={true}
                    onClick={() => onDelete(pet.id)}
                >
                    Видалити
                </ButtonComponent>
            </div>
        </div>
    );
}