import { useEffect, useMemo } from 'react';
import GalleryForm from './components/GalleryForm/GalleryForm';
import GalleryComponent from './components/GalleryComponent/GalleryComponent';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import FilterBar from './components/FilterBar/FilterBar';
import DeletedPets from './components/DeletedPets/DeletedPets';
import Toast from './components/Toast/Toast';
import { usePetStore } from './store/usePetStore';

export default function App() {
  const pets = usePetStore((state) => state.pets);
  const deletedPets = usePetStore((state) => state.deletedPets);
  const filterMode = usePetStore((state) => state.filterMode);
  const viewMode = usePetStore((state) => state.viewMode);
  const selectedType = usePetStore((state) => state.selectedType);
  const isDarkTheme = usePetStore((state) => state.isDarkTheme);
  const toast = usePetStore((state) => state.toast);

  const addPet = usePetStore((state) => state.addPet);
  const deletePet = usePetStore((state) => state.deletePet);
  const restorePet = usePetStore((state) => state.restorePet);
  const permanentDeletePet = usePetStore((state) => state.permanentDeletePet);
  const toggleFavorite = usePetStore((state) => state.toggleFavorite);
  const setFilterMode = usePetStore((state) => state.setFilterMode);
  const setViewMode = usePetStore((state) => state.setViewMode);
  const setSelectedType = usePetStore((state) => state.setSelectedType);
  const toggleTheme = usePetStore((state) => state.toggleTheme);
  const clearToast = usePetStore((state) => state.clearToast);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

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
          <ThemeToggle isDark={isDarkTheme} onToggle={toggleTheme} />
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
              <GalleryForm onAddPet={addPet} />
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
                onDelete={deletePet}
                onToggleFavorite={toggleFavorite}
                filterMode={filterMode}
                selectedType={selectedType}
              />
            </div>
          </div>
        ) : (
          <DeletedPets
            pets={deletedPets}
            onRestore={restorePet}
            onPermanentDelete={permanentDeletePet}
          />
        )}
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={clearToast}
        />
      )}
    </div>
  );
}