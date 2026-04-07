export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Про застосунок
        </h2>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
               Опис
            </h3>
            <p className="leading-relaxed">
              "Галерея Домашніх Улюбленців" — це сучасний веб-застосунок для управління
              інформацією про ваших домашніх тварин. Застосунок розроблено з використанням
              React 19, TypeScript, Tailwind CSS та Zustand для управління станом.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Технології
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="font-semibold text-blue-900 dark:text-blue-300">React 19</p>
                <p className="text-sm">Бібліотека для побудови інтерфейсів</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="font-semibold text-blue-900 dark:text-blue-300">TypeScript</p>
                <p className="text-sm">Типізація для надійного коду</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="font-semibold text-blue-900 dark:text-blue-300">Tailwind CSS</p>
                <p className="text-sm">Utility-first CSS framework</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="font-semibold text-blue-900 dark:text-blue-300">Zustand</p>
                <p className="text-sm">Управління станом застосунку</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="font-semibold text-blue-900 dark:text-blue-300">React Router</p>
                <p className="text-sm">Маршрутизація та навігація</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="font-semibold text-blue-900 dark:text-blue-300">Vite</p>
                <p className="text-sm">Швидкий build tool</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Функціональність
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Додавання нових улюбленців через форму</li>
              <li>Перегляд детальної інформації про кожного улюбленця</li>
              <li>Фільтрація за типом тварини та статусом</li>
              <li>Позначення улюблених тварин</li>
              <li>Відстеження статусу вакцинації</li>
              <li>Тимчасове видалення з можливістю відновлення</li>
              <li>Перегляд випадкових порід собак через Dog CEO API</li>
              <li>Темна/світла тема інтерфейсу</li>
              <li>Збереження даних у localStorage</li>
              <li>Адаптивний дизайн для мобільних пристроїв</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Розробка
            </h3>
            <p className="leading-relaxed">
              Застосунок створено як частину практичних робіт з вивчення сучасних
              веб-технологій. Код організовано за компонентним підходом з розділенням
              логіки, UI та стану. Використовується функціональний підхід з React Hooks.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              Лабораторна робота №8
            </h3>
            <p>
              Цей застосунок демонструє використання React Router для створення
              багатосторінкового застосунку з вкладеною маршрутизацією,
              динамічними параметрами URL та програмною навігацією.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
