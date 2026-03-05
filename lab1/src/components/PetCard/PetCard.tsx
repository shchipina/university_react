import { Pet } from '../../types/pet';
import LikeButton from '../LikeButton/LikeButton';
import './PetCard.css';

interface PetCardProps {
  pet: Pet;
}

const PetCard = ({ pet }: PetCardProps) => {
  const speciesIcon = pet.species === 'dog' ? '🐶' : '🐱';
  const speciesName = pet.species === 'dog' ? 'Собака' : 'Кіт';

  return (
    <div className="pet-card">
      <div className="pet-image-container">
        <img
          src={pet.image}
          alt={pet.name}
          className="pet-image"
        />
        <span className="species-badge">{speciesIcon}</span>
      </div>

      <div className="pet-info">
        <h3 className="pet-name">{pet.name}</h3>

        <div className="pet-details">
          <p className="pet-detail">
            <span className="detail-label">Вид:</span>
            <span className="detail-value">{speciesName}</span>
          </p>

          {pet.breed && (
            <p className="pet-detail">
              <span className="detail-label">Порода:</span>
              <span className="detail-value">{pet.breed}</span>
            </p>
          )}

          <p className="pet-detail">
            <span className="detail-label">Вік:</span>
            <span className="detail-value">{pet.age} {pet.age === 1 ? 'рік' : pet.age < 5 ? 'роки' : 'років'}</span>
          </p>
        </div>

        <div className="pet-actions">
          <LikeButton initialLikes={pet.likes} petId={pet.id} />
        </div>
      </div>
    </div>
  );
};

export default PetCard;
