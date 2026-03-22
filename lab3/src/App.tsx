import { useState, useEffect, useMemo } from 'react';
import GalleryForm from './components/GalleryForm/GalleryForm';
import GalleryComponent from './components/GalleryComponent/GalleryComponent';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import FilterBar from './components/FilterBar/FilterBar';
import DeletedPets from './components/DeletedPets/DeletedPets';

export type Pet = {
  id: string;
  name: string;
  type: string;
  age: string;
  description: string;
  isVaccinated: boolean;
  isFavorite: boolean;
};

export type FilterMode = 'all' | 'favorites' | 'vaccinated';
export type ViewMode = 'active' | 'deleted';

export default function App() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [deletedPets, setDeletedPets] = useState<Pet[]>([]);
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('active');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  const handleToggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const handleAddPet = (newPetData: Omit<Pet, 'id' | 'isFavorite'>) => {
    const newPet: Pet = {
      ...newPetData,
      id: crypto.randomUUID(),
      isFavorite: false,
    };
    setPets((prevPets) => [newPet, ...prevPets]);
  };

  const handleDeletePet = (id: string) => {
    const petToDelete = pets.find(pet => pet.id === id);
    if (petToDelete) {
      setDeletedPets((prev) => [petToDelete, ...prev]);
      setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
    }
  };

  const handleRestorePet = (id: string) => {
    const petToRestore = deletedPets.find(pet => pet.id === id);
    if (petToRestore) {
      setPets((prev) => [petToRestore, ...prev]);
      setDeletedPets((prevDeleted) => prevDeleted.filter((pet) => pet.id !== id));
    }
  };

  const handlePermanentDelete = (id: string) => {
    setDeletedPets((prevDeleted) => prevDeleted.filter((pet) => pet.id !== id));
  };

  const handleToggleFavorite = (id: string) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === id ? { ...pet, isFavorite: !pet.isFavorite } : pet
      )
    );
  };

  const availableTypes = useMemo(() => {
    const types = new Set(pets.map(pet => pet.type));
    return Array.from(types);
  }, [pets]);

  const filteredPets = useMemo(() => {
    let result = [...pets];

    if (selectedType !== 'all') {
      result = result.filter(pet => pet.type === selectedType);
    }

    switch (filterMode) {
      case 'favorites':
        result = result.filter(pet => pet.isFavorite);
        break;
      case 'vaccinated':
        result = result.filter(pet => pet.isVaccinated);
        break;
      default:
        break;
    }

    return result;
  }, [pets, filterMode, selectedType]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Галерея Домашніх Улюбленців
          </h1>
          <ThemeToggle isDark={isDarkTheme} onToggle={handleToggleTheme} />
        </div>

        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setViewMode('active')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${viewMode === 'active'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              }`}
          >
            Активні ({pets.length})
          </button>
          <button
            onClick={() => setViewMode('deleted')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${viewMode === 'deleted'
                ? 'bg-red-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              }`}
          >
            Видалені ({deletedPets.length})
          </button>
        </div>

        {viewMode === 'active' ? (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/3 sticky top-10">
              <GalleryForm onAddPet={handleAddPet} />
            </div>

            <div className="w-full lg:w-2/3 space-y-6">
              <FilterBar
                filterMode={filterMode}
                onFilterChange={setFilterMode}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                availableTypes={availableTypes}
                totalCount={pets.length}
                filteredCount={filteredPets.length}
              />

              <GalleryComponent
                pets={filteredPets}
                onDelete={handleDeletePet}
                onToggleFavorite={handleToggleFavorite}
                filterMode={filterMode}
                selectedType={selectedType}
              />
            </div>
          </div>
        ) : (
          <DeletedPets
            pets={deletedPets}
            onRestore={handleRestorePet}
            onPermanentDelete={handlePermanentDelete}
          />
        )}
      </div>
    </div>
  );
}