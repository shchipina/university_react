import { Link } from 'react-router-dom';
import { usePetStore } from '../store/usePetStore';

export default function HomePage() {
  const pets = usePetStore((state) => state.pets);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 transition-colors duration-300">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ласкаво просимо!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Управління улюбленцями стало простішим
          </p>
        </div>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">
               Про застосунок
            </h3>
            <p className="leading-relaxed">
              Цей застосунок допоможе вам зберігати та керувати інформацією про
              ваших домашніх улюбленців. Додавайте нових тварин, відстежуйте їх
              вакцинацію, відзначайте фаворитів та переглядайте детальну інформацію
              про кожного улюбленця.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5">
              <h4 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
                Основні можливості
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Додавання та редагування улюбленців</li>
                <li>• Фільтрація за типом та статусом</li>
                <li>• Управління улюбленими</li>
                <li>• Відстеження вакцинації</li>
                <li>• Тимчасове видалення</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-5">
              <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Статистика
              </h4>
              <div className="space-y-2 text-sm">
                <p>Всього улюбленців: <span className="font-bold">{pets.length}</span></p>
                <p>Улюблені: <span className="font-bold">{pets.filter(p => p.isFavorite).length}</span></p>
                <p>Щеплені: <span className="font-bold">{pets.filter(p => p.isVaccinated).length}</span></p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white text-center">
            <p className="text-lg mb-4">
              Готові почати? Перегляньте своїх улюбленців!
            </p>
            <Link
              to="/pets"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Перейти до галереї →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
