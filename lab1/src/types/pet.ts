export interface Pet {
    id: string;
    name: string;
    species: 'dog' | 'cat';
    age: number;
    image: string;
    likes: number;
    breed?: string;
}

export type PetFilter = 'all' | 'dog' | 'cat';
