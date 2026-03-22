import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

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

type ToastMessage = {
    message: string;
    type: 'success' | 'error' | 'info';
} | null;

interface PetState {
    pets: Pet[];
    deletedPets: Pet[];
    isDarkTheme: boolean;
    filterMode: FilterMode;
    viewMode: ViewMode;
    selectedType: string;
    toast: ToastMessage;

    addPet: (petData: Omit<Pet, 'id' | 'isFavorite'>) => void;
    deletePet: (id: string) => void;
    restorePet: (id: string) => void;
    permanentDeletePet: (id: string) => void;
    toggleFavorite: (id: string) => void;

    setFilterMode: (mode: FilterMode) => void;
    setViewMode: (mode: ViewMode) => void;
    setSelectedType: (type: string) => void;
    toggleTheme: () => void;

    setToast: (toast: ToastMessage) => void;
    clearToast: () => void;
}

export const usePetStore = create<PetState>()(
    persist(
        (set, get) => ({
            pets: [],
            deletedPets: [],
            isDarkTheme: false,
            filterMode: 'all',
            viewMode: 'active',
            selectedType: 'all',
            toast: null,

            addPet: (petData) => {
                const newPet: Pet = {
                    ...petData,
                    id: crypto.randomUUID(),
                    isFavorite: false,
                };

                set((state) => ({
                    pets: [newPet, ...state.pets],
                    toast: { message: `Тваринку успішно додано до галереї!`, type: 'success' },
                }));
            },

            deletePet: (id) => {
                const { pets } = get();
                const petToDelete = pets.find((pet) => pet.id === id);

                if (petToDelete) {
                    set((state) => ({
                        deletedPets: [petToDelete, ...state.deletedPets],
                        pets: state.pets.filter((pet) => pet.id !== id),
                        toast: { message: `Тваринку переміщено в кошик`, type: 'info' },
                    }));
                }
            },

            restorePet: (id) => {
                const { deletedPets } = get();
                const petToRestore = deletedPets.find((pet) => pet.id === id);

                if (petToRestore) {
                    set((state) => ({
                        pets: [petToRestore, ...state.pets],
                        deletedPets: state.deletedPets.filter((pet) => pet.id !== id),
                        toast: { message: `Тваринку відновлено!`, type: 'success' },
                    }));
                }
            },

            permanentDeletePet: (id) => {
                const { deletedPets } = get();
                const petToDelete = deletedPets.find((pet) => pet.id === id);

                set((state) => ({
                    deletedPets: state.deletedPets.filter((pet) => pet.id !== id),
                    toast: petToDelete
                        ? { message: `🗑️ ${petToDelete.name} видалено назавжди`, type: 'info' }
                        : null,
                }));
            },

            toggleFavorite: (id) => {
                set((state) => ({
                    pets: state.pets.map((pet) =>
                        pet.id === id ? { ...pet, isFavorite: !pet.isFavorite } : pet
                    ),
                }));
            },

            setFilterMode: (mode) => set({ filterMode: mode }),
            setViewMode: (mode) => set({ viewMode: mode }),
            setSelectedType: (type) => set({ selectedType: type }),

            toggleTheme: () => {
                set((state) => {
                    const newTheme = !state.isDarkTheme;

                    if (newTheme) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }

                    return { isDarkTheme: newTheme };
                });
            },

            setToast: (toast) => set({ toast }),
            clearToast: () => set({ toast: null }),
        }),
        {
            name: 'pet-gallery-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                pets: state.pets,
                deletedPets: state.deletedPets,
                isDarkTheme: state.isDarkTheme,
            }),
        }
    )
);
