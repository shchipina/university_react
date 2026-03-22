import type { Pet } from '../../types/pet';
import PetCard from '../PetCard/PetCard';
import './PetGallery.css';

interface PetGalleryProps {
    pets: Pet[];
    loading?: boolean;
}

const PetGallery = ({ pets, loading = false }: PetGalleryProps) => {
    if (loading) {
        return (
            <div className="gallery-loading">
                <div className="loading-spinner"></div>
                <p>Завантаження улюбленців...</p>
            </div>
        );
    }

    if (pets.length === 0) {
        return (
            <div className="gallery-empty">
                <p className="empty-icon">🐾</p>
                <p className="empty-message">Немає тварин для відображення</p>
            </div>
        );
    }

    return (
        <div className="pet-gallery">
            {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
            ))}
        </div>
    );
};

export default PetGallery;
