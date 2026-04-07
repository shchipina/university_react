import { useState, useEffect } from 'react';
import { usePetStore } from '../../store/usePetStore';

type DogApiData = {
    id: number;
    name: string;
    breed?: string;
    description?: string;
    image?: string;
    origin?: string;
    temperament?: string;
};

export default function ApiPetList() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [externalPets, setExternalPets] = useState<DogApiData[]>([]);
    useEffect(() => {
        const fetchDogs = async () => {
            try {
                setLoading(true);
                setError(null);

                const breedsResponse = await fetch('https://dog.ceo/api/breeds/list/all');

                if (!breedsResponse.ok) {
                    throw new Error(`HTTP помилка! Статус: ${breedsResponse.status}`);
                }

                const breedsData = await breedsResponse.json();
                const allBreeds = Object.keys(breedsData.message);

                const selectedBreeds = allBreeds
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 6);

                const dogsPromises = selectedBreeds.map(async (breed, index): Promise<DogApiData | null> => {
                    try {
                        const imageResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
                        const imageData = await imageResponse.json();

                        return {
                            id: index + 1,
                            name: breed.charAt(0).toUpperCase() + breed.slice(1),
                            breed: breed,
                            description: `Чудова порода собак: ${breed}`,
                            image: imageData.message,
                            origin: 'Unknown',
                            temperament: 'Дружелюбний'
                        } as DogApiData;
                    } catch {
                        return null;
                    }
                });

                const dogsData = await Promise.all(dogsPromises);
                const validDogs = dogsData.filter((dog) => dog !== null) as DogApiData[];

                setExternalPets(validDogs);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Невідома помилка';
                setError(`Помилка завантаження даних: ${errorMessage}`);
            } finally {
                setLoading(false);
            }
        };

        fetchDogs();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <div className="relative w-16 h-16 mb-4">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
                </div>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    Завантаження даних з API...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg p-6 text-center">
                <div className="text-red-600 dark:text-red-400 text-4xl mb-3">⚠️</div>
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
                    Виникла помилка
                </h3>
                <p className="text-red-700 dark:text-red-400">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                    Спробувати знову
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Собаки з API ({externalPets.length})
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Завантажено з freetestapi.com
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {externalPets.map((dog) => (
                    <div
                        key={dog.id}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                    >
                        {dog.image && (
                            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <img
                                    src={dog.image}
                                    alt={dog.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://via.placeholder.com/400x300?text=No+Image';
                                    }}
                                />
                            </div>
                        )}

                        <div className="p-4 space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {dog.name}
                            </h3>

                            {dog.breed && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <span className="font-semibold">Порода:</span> {dog.breed}
                                </p>
                            )}

                            {dog.origin && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <span className="font-semibold">Походження:</span> {dog.origin}
                                </p>
                            )}

                            {dog.description && (
                                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                                    {dog.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {externalPets.length === 0 && !loading && !error && (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                    Дані не знайдено
                </div>
            )}
        </div>
    );
}
