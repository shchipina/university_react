import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 transition-colors duration-300">
        <div className="mb-8">
          <div className="text-8xl mb-4">😿</div>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Сторінку не знайдено
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            На жаль, цієї сторінки не існує. Можливо, вона була переміщена або видалена.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              На головну
            </Link>
            <Link
              to="/pets"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              До галереї
            </Link>
          </div>

          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Підказка: Перевірте правильність введеної адреси або скористайтеся навігаційним меню вгорі.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
