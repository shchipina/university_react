import { useMemo } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import GalleryForm from '../components/GalleryForm/GalleryForm';
import GalleryComponent from '../components/GalleryComponent/GalleryComponent';
import FilterBar from '../components/FilterBar/FilterBar';
import { usePetStore } from '../store/usePetStore';

export default function PetsPage() {
  const location = useLocation();
  const pets = usePetStore((state) => state.pets);
  const deletedPets = usePetStore((state) => state.deletedPets);
  const filterMode = usePetStore((state) => state.filterMode);
  const selectedType = usePetStore((state) => state.selectedType);

  const addPet = usePetStore((state) => state.addPet);
  const deletePet = usePetStore((state) => state.deletePet);
  const toggleFavorite = usePetStore((state) => state.toggleFavorite);
  const setFilterMode = usePetStore((state) => state.setFilterMode);
  const setSelectedType = usePetStore((state) => state.setSelectedType);

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

  const isNestedRoute = location.pathname !== '/pets';

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex gap-4 flex-wrap">
        <NavLink
          to="/pets"
          end
          className={({ isActive }) =>
            `px-6 py-2 rounded-lg font-medium transition-colors ${isActive
              ? 'bg-blue-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`
          }
        >
          Активні ({pets.length})
        </NavLink>
        <NavLink
          to="/pets/deleted"
          className={({ isActive }) =>
            `px-6 py-2 rounded-lg font-medium transition-colors ${isActive
              ? 'bg-red-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`
          }
        >
          Видалені ({deletedPets.length})
        </NavLink>
        <NavLink
          to="/pets/api"
          className={({ isActive }) =>
            `px-6 py-2 rounded-lg font-medium transition-colors ${isActive
              ? 'bg-green-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`
          }
        >
          API Собаки
        </NavLink>
      </div>

      {isNestedRoute ? (
        <Outlet />
      ) : (
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
      )}
    </div>
  );
}
