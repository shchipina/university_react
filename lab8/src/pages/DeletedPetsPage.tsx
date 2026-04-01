import DeletedPets from '../components/DeletedPets/DeletedPets';
import { usePetStore } from '../store/usePetStore';

export default function DeletedPetsPage() {
  const deletedPets = usePetStore((state) => state.deletedPets);
  const restorePet = usePetStore((state) => state.restorePet);
  const permanentDeletePet = usePetStore((state) => state.permanentDeletePet);

  return (
    <DeletedPets
      pets={deletedPets}
      onRestore={restorePet}
      onPermanentDelete={permanentDeletePet}
    />
  );
}
