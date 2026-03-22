import { useState, useEffect } from 'react';
import GalleryForm from './components/GalleryForm/GalleryForm';
import GalleryComponent from './components/GalleryComponent/GalleryComponent';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

export type Pet = {
  id: string;
  name: string;
  type: string;
  age: string;
  description: string;
  isVaccinated: boolean;
  isFavorite: boolean;
};

export default function App() {
  const [pets, setPets] = useState<Pet[]>([]);
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
    setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
  };

  const handleToggleFavorite = (id: string) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === id ? { ...pet, isFavorite: !pet.isFavorite } : pet
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Галерея Домашніх Улюбленців
          </h1>
          <ThemeToggle isDark={isDarkTheme} onToggle={handleToggleTheme} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          <div className="w-full lg:w-1/3 sticky top-10">
            <GalleryForm onAddPet={handleAddPet} />
          </div>

          <div className="w-full lg:w-2/3">
            <GalleryComponent
              pets={pets}
              onDelete={handleDeletePet}
              onToggleFavorite={handleToggleFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
}