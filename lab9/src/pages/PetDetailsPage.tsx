import { useParams, useNavigate, Link } from 'react-router-dom';
import { usePetStore } from '../store/usePetStore';
import { petTypeOptions } from '../data/petTypes';

export default function PetDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pets = usePetStore((state) => state.pets);
  const toggleFavorite = usePetStore((state) => state.toggleFavorite);

  const pet = pets.find(p => p.id === id);

  if (!pet) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 text-center transition-colors duration-300">
          <div className="text-6xl mb-4">😿</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Улюбленця не знайдено
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            На жаль, улюбленця з ідентифікатором <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{id}</code> не знайдено.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              ← Назад
            </button>
            <Link
              to="/pets"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              До списку улюбленців
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const petTypeLabel = petTypeOptions.find(opt => opt.value === pet.type)?.label || pet.type;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => navigate('/pets')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span className="text-xl">←</span>
          <span className="font-medium">Назад до списку</span>
        </button>
        <button
          onClick={() => toggleFavorite(pet.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${pet.isFavorite
              ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
        >
          {pet.isFavorite ? '❤️ В улюблених' : '🤍 Додати в улюблені'}
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{pet.name}</h1>
              <p className="text-xl opacity-90">{petTypeLabel}</p>
            </div>
            <div className="text-5xl">
              {pet.type === 'cat' && '🐱'}
              {pet.type === 'dog' && '🐶'}
              {pet.type === 'parrot' && '🦜'}
              {pet.type === 'hamster' && '🐹'}
              {pet.type === 'rabbit' && '🐰'}
              {pet.type === 'turtle' && '🐢'}
              {pet.type === 'other' && '🐾'}
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5">
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2 uppercase tracking-wide">
                Вік
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {pet.age}
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-5">
              <h3 className="text-sm font-semibold text-purple-900 dark:text-purple-300 mb-2 uppercase tracking-wide">
                Тип тварини
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {petTypeLabel}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-5">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
              Опис
            </h3>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
              {pet.description || 'Опис відсутній'}
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className={`flex-1 rounded-lg p-5 ${pet.isVaccinated
                ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
              }`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{pet.isVaccinated ? '✅' : '❌'}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Вакцинація
                  </h3>
                  <p className={`text-sm ${pet.isVaccinated
                      ? 'text-green-700 dark:text-green-300'
                      : 'text-red-700 dark:text-red-300'
                    }`}>
                    {pet.isVaccinated ? 'Щеплено' : 'Не щеплено'}
                  </p>
                </div>
              </div>
            </div>

            <div className={`flex-1 rounded-lg p-5 ${pet.isFavorite
                ? 'bg-pink-50 dark:bg-pink-900/20 border-2 border-pink-500'
                : 'bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600'
              }`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{pet.isFavorite ? '❤️' : '🤍'}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Статус
                  </h3>
                  <p className={`text-sm ${pet.isFavorite
                      ? 'text-pink-700 dark:text-pink-300'
                      : 'text-gray-600 dark:text-gray-400'
                    }`}>
                    {pet.isFavorite ? 'В улюблених' : 'Звичайний'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-sm text-gray-600 dark:text-gray-400">
            <p><strong>ID:</strong> <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">{pet.id}</code></p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3 justify-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
        >
          ← Назад
        </button>
        <Link
          to="/pets"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          До списку улюбленців
        </Link>
      </div>
    </div>
  );
}
