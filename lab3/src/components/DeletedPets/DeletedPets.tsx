import type { Pet } from '../../App';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

type DeletedPetsProps = {
    pets: Pet[];
    onRestore: (id: string) => void;
    onPermanentDelete: (id: string) => void;
};

export default function DeletedPets({ pets, onRestore, onPermanentDelete }: DeletedPetsProps) {
    if (pets.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-16 text-center shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <div className="text-6xl mb-4">🗑️</div>
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">
                    Кошик порожній
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Видалені тваринки з'являться тут
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Підказка:</strong> Ви можете відновити тваринку або видалити її назавжди
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pets.map((pet) => (
                    <div
                        key={pet.id}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border-2 border-red-200 dark:border-red-800 transition-colors duration-300"
                    >
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                {pet.name}
                                {pet.isFavorite && <span>❤️</span>}
                            </h3>
                            <p className="text-sm font-medium text-red-600 dark:text-red-400 capitalize">
                                {pet.type}
                            </p>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                            <p>
                                <span className="font-semibold text-gray-700 dark:text-gray-200">Вік:</span>{' '}
                                {pet.age || 'Невідомо'}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-700 dark:text-gray-200">Щеплення:</span>{' '}
                                {pet.isVaccinated ? '✅ Є' : '❌ Немає'}
                            </p>
                            {pet.description && (
                                <p className="mt-2 text-gray-500 dark:text-gray-400 italic line-clamp-2">
                                    "{pet.description}"
                                </p>
                            )}
                        </div>

                        <div className="flex gap-2">
                            <ButtonComponent
                                variant="primary"
                                size="sm"
                                fullWidth={true}
                                onClick={() => onRestore(pet.id)}
                            >
                                ↺ Відновити
                            </ButtonComponent>
                            <ButtonComponent
                                variant="danger"
                                size="sm"
                                fullWidth={true}
                                onClick={() => {
                                    if (confirm(`Видалити ${pet.name} назавжди?`)) {
                                        onPermanentDelete(pet.id);
                                    }
                                }}
                            >
                                🗑️ Назавжди
                            </ButtonComponent>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
